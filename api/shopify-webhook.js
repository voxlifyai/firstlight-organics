import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify the request is genuinely from Shopify
  const hmac = req.headers['x-shopify-hmac-sha256'];
  const body = JSON.stringify(req.body);
  const hash = crypto
    .createHmac('sha256', process.env.SHOPIFY_WEBHOOK_SECRET)
    .update(body, 'utf8')
    .digest('base64');

  if (hash !== hmac) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const order = req.body;
  const email = order.email;
  const firstName = order.billing_address?.first_name || order.customer?.first_name || '';
  const lastName = order.billing_address?.last_name || order.customer?.last_name || '';
  const phone = order.phone || order.billing_address?.phone || '';

  if (!email) return res.status(200).json({ ok: true });

  try {
    await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_TOKEN}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        locationId: 'Vggrn9OzkEQBfQV9E895',
        firstName,
        lastName,
        email,
        phone,
        tags: ['customer']
      })
    });
  } catch (err) {
    console.error('GHL webhook error:', err);
  }

  return res.status(200).json({ ok: true });
}

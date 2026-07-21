export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GHL_TOKEN}`,
      'Version': '2021-07-28',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      locationId: 'Vggrn9OzkEQBfQV9E895',
      email,
      tags: ['newsletter']
    })
  });

  if (!ghlRes.ok) {
    const err = await ghlRes.text();
    console.error('GHL error:', err);
    return res.status(500).json({ error: 'Subscription failed' });
  }

  return res.status(200).json({ success: true });
}

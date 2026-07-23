export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !email.includes('@')) {
    return res.status(400).json({ error: 'Name and valid email required' });
  }

  const [firstName, ...rest] = name.trim().split(' ');
  const lastName = rest.join(' ');

  // Create or update contact
  const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
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
      tags: ['website-contact']
    })
  });

  if (!contactRes.ok) {
    console.error('GHL contact error:', await contactRes.text());
    return res.status(500).json({ error: 'Failed to create contact' });
  }

  const { contact } = await contactRes.json();

  // Add note with subject and message
  if (contact?.id && message) {
    const noteBody = subject ? `Subject: ${subject}\n\n${message}` : message;
    await fetch(`https://services.leadconnectorhq.com/contacts/${contact.id}/notes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_TOKEN}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body: noteBody })
    });
  }

  return res.status(200).json({ success: true });
}

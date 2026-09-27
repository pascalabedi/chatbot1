export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const message = body?.message

    if (!message || typeof message !== 'string' || !message.trim()) {
      res.status(400).json({ error: 'Le message est requis.' })
      return
    }

    const upstream = await fetch('https://ai.mapsante.cd/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message.trim() }),
    })

    const data = await upstream.json()
    res.status(upstream.status).json(data)
  } catch {
    res.status(502).json({
      error: 'Impossible de joindre le serveur IA.',
    })
  }
}

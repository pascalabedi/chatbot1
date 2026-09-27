// Même URL en local (proxy Vite) et en prod (fonction serverless Vercel /api/message).
const API_URL = '/api/message'

/**
 * Envoie un message à l'API AI Assistant.
 * @param {string} message
 * @returns {Promise<{ status: string, user_message: string, ai_response: string }>}
 */
export async function sendMessage(message) {
  let response

  try {
    response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
  } catch {
    throw new Error(
      'Impossible de joindre le serveur. Vérifiez votre connexion internet.',
    )
  }

  if (!response.ok) {
    throw new Error(
      `Le serveur a renvoyé une erreur (${response.status}). Réessayez plus tard.`,
    )
  }

  let data

  try {
    data = await response.json()
  } catch {
    throw new Error('Réponse invalide du serveur.')
  }

  if (!data?.ai_response) {
    throw new Error("La réponse de l'IA est manquante ou invalide.")
  }

  return data
}

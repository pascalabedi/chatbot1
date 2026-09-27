import { useState } from 'react'
import { sendMessage } from './api/chatApi'
import ChatHeader from './components/ChatHeader'
import ChatInput from './components/ChatInput'
import MessageList from './components/MessageList'
import './App.css'

let messageId = 0

function createMessage(role, content) {
  messageId += 1
  return { id: messageId, role, content }
}

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSend() {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    setInput('')
    setError(null)
    setMessages((prev) => [...prev, createMessage('user', trimmed)])
    setIsLoading(true)

    try {
      const data = await sendMessage(trimmed)
      setMessages((prev) => [
        ...prev,
        createMessage('assistant', data.ai_response),
      ])
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur inattendue s'est produite.",
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <ChatHeader />
      <main className="app__main">
        <MessageList messages={messages} isLoading={isLoading} />
      </main>
      <footer className="app__footer">
        {error && (
          <p className="app__error" role="alert">
            {error}
          </p>
        )}
        <ChatInput
          value={input}
          onChange={setInput}
          onSubmit={handleSend}
          isLoading={isLoading}
        />
      </footer>
    </div>
  )
}

export default App

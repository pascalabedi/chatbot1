import { useEffect, useRef } from 'react'
import EmptyState from './EmptyState'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'

function MessageList({ messages, isLoading }) {
  const bottomRef = useRef(null)
  const isEmpty = messages.length === 0 && !isLoading

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  if (isEmpty) {
    return (
      <div className="message-list message-list--empty">
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="message-list" role="log" aria-live="polite">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          role={message.role}
          content={message.content}
        />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}

export default MessageList

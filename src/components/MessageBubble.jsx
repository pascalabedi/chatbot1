import MarkdownContent from './MarkdownContent'

function MessageBubble({ role, content }) {
  const isUser = role === 'user'

  return (
    <div
      className={`message ${isUser ? 'message--user' : 'message--assistant'}`}
    >
      {!isUser && (
        <div className="message__avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
      <div className="message__bubble">
        {isUser ? (
          <p className="message__text">{content}</p>
        ) : (
          <MarkdownContent content={content} />
        )}
      </div>
    </div>
  )
}

export default MessageBubble

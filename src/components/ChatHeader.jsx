function ChatHeader() {
  return (
    <header className="chat-header">
      <div className="chat-header__brand">
        <span className="chat-header__logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <h1 className="chat-header__title">Pascoco AI Assistant</h1>
      </div>
    </header>
  )
}

export default ChatHeader

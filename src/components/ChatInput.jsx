function ChatInput({ value, onChange, onSubmit, isLoading }) {
  const canSend = value.trim().length > 0 && !isLoading

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (canSend) {
        onSubmit()
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (canSend) {
      onSubmit()
    }
  }

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <div className="chat-input__field">
        <textarea
          className="chat-input__textarea"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Écrivez votre message…"
          rows={1}
          disabled={isLoading}
          aria-label="Message"
        />
        <button
          type="submit"
          className="chat-input__send"
          disabled={!canSend}
          aria-label="Envoyer"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.5 12L19.5 5L12.5 12L19.5 19L4.5 12Z"
              fill="currentColor"
            />
          </svg>
          <span className="chat-input__send-label">Envoyer</span>
        </button>
      </div>
    </form>
  )
}

export default ChatInput

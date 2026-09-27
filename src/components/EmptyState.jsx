function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <h2 className="empty-state__title">Comment puis-je vous aider ?</h2>
      <p className="empty-state__subtitle">
        Posez une question pour démarrer la conversation.
      </p>
    </div>
  )
}

export default EmptyState

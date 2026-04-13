import { useEffect } from 'react';
import './InfoTooltip.css';

function InfoTooltip({ onClose, onSwitchToLogin }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="popup popup_type_info"
      role="dialog"
      aria-modal="true"
      aria-label="Information"
      onClick={handleOverlayClick}
    >
      <div className="popup__container info-tooltip__container">
        <button
          type="button"
          className="popup__close-btn"
          aria-label="Close dialog"
          onClick={onClose}
        />
        <div className="info-tooltip__icon" aria-hidden="true">✓</div>
        <h2 className="info-tooltip__title">
          Registration successfully completed!
        </h2>
        <button
          type="button"
          className="info-tooltip__signin-btn"
          onClick={() => {
            onClose();
            onSwitchToLogin();
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default InfoTooltip;

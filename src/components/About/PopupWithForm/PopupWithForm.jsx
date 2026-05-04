import { useEffect } from 'react';
import './PopupWithForm.css';

function PopupWithForm({ title, name, children, onClose, onSubmit, submitText, isValid, altAction }) {
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
      className={`popup popup_type_${name}`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={handleOverlayClick}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-btn"
          aria-label="Close dialog"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            type="submit"
            className={`popup__submit-btn ${!isValid ? 'popup__submit-btn_disabled' : ''}`}
            disabled={!isValid}
          >
            {submitText}
          </button>
        </form>
        {altAction && (
          <p className="popup__alt-text">
            {altAction.question}{' '}
            <button
              type="button"
              className="popup__alt-btn"
              onClick={altAction.onClick}
            >
              {altAction.label}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;

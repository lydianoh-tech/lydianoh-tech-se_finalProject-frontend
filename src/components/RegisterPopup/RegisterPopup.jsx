import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup({ onClose, onSubmit, onSwitchToLogin }) {
  const [values, setValues] = useState({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState({ email: '', password: '', name: '' });

  const isValid =
    values.email.trim() !== '' &&
    values.password.trim() !== '' &&
    values.name.trim() !== '' &&
    !errors.email &&
    !errors.password &&
    !errors.name;

  function handleChange(e) {
    const { name, value, validationMessage } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validationMessage }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    onSubmit(values);
  }

  return (
    <PopupWithForm
      title="Sign up"
      name="register"
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText="Sign up"
      isValid={isValid}
      altAction={{
        question: 'Already have an account?',
        label: 'Sign in',
        onClick: onSwitchToLogin,
      }}
    >
      <label className="popup__label" htmlFor="register-email">Email</label>
      <input
        id="register-email"
        type="email"
        name="email"
        className="popup__input"
        placeholder="Enter email"
        value={values.email}
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <span className="popup__input-error">{errors.email}</span>

      <label className="popup__label" htmlFor="register-password">Password</label>
      <input
        id="register-password"
        type="password"
        name="password"
        className="popup__input"
        placeholder="Enter password"
        value={values.password}
        onChange={handleChange}
        required
        minLength={8}
        autoComplete="new-password"
      />
      <span className="popup__input-error">{errors.password}</span>

      <label className="popup__label" htmlFor="register-name">Username</label>
      <input
        id="register-name"
        type="text"
        name="name"
        className="popup__input"
        placeholder="Enter your username"
        value={values.name}
        onChange={handleChange}
        required
        minLength={2}
        maxLength={30}
        autoComplete="username"
      />
      <span className="popup__input-error">{errors.name}</span>
    </PopupWithForm>
  );
}

export default RegisterPopup;

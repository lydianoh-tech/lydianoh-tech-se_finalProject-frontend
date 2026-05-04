import { useState } from "react";
import PopupWithForm from "../../About/PopupWithForm/PopupWithForm";

function LoginPopup({ onClose, onSubmit, onSwitchToRegister }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const isValid =
    values.email.trim() !== "" &&
    values.password.trim() !== "" &&
    !errors.email &&
    !errors.password;

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
      title="Sign in"
      name="login"
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText="Sign in"
      isValid={isValid}
      altAction={{
        question: "Don\u2019t have an account?",
        label: "Sign up",
        onClick: onSwitchToRegister,
      }}
    >
      <label className="popup__label" htmlFor="login-email">
        Email
      </label>
      <input
        id="login-email"
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

      <label className="popup__label" htmlFor="login-password">
        Password
      </label>
      <input
        id="login-password"
        type="password"
        name="password"
        className="popup__input"
        placeholder="Enter password"
        value={values.password}
        onChange={handleChange}
        required
        minLength={8}
        autoComplete="current-password"
      />
      <span className="popup__input-error">{errors.password}</span>
    </PopupWithForm>
  );
}

export default LoginPopup;

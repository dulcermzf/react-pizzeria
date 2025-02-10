import { Button } from "react-bootstrap";
import "./Register.css";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState({
    status: "",
    message: "",
  });

  const handleChange = (event) => {
    const target = event.target;

    setForm({ ...form, [target.name]: target.value });
  };

  const setStatusMessage = (status, message) => {
    setMessage({ status, message });
  };

  const validateForm = (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = form;

    if (!email || !password || !confirmPassword) {
      setStatusMessage("error", "You must fill in all the fields.");
      return;
    }

    if (password.length < 6) {
      setStatusMessage("error", "Password must be at least 6 characters.");
      return;
    }

    if (password != confirmPassword) {
      setStatusMessage("error", "Passwords do not match.");
      return;
    }

    setStatusMessage("success", "Succesfully registered");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center register-container">
      <h2>Register</h2>
      <form onSubmit={validateForm}>
        <div className="d-flex flex-column justify-content-center m-3">
          <label className="input-label" htmlFor="email">
            Email*
          </label>
          <input
            className="text-input"
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column justify-content-center m-3">
          <label className="input-label" htmlFor="password">
            Password*
          </label>
          <input
            className="text-input"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column justify-content-center m-3">
          <label className="input-label" htmlFor="confirmPassword">
            Confirm password*
          </label>
          <input
            className="text-input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {message && <p className={message.status}>{message.message}</p>}
        <div className="button-container mx-3 my-5">
          <Button type="submit" className="button-register" variant="primary">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;

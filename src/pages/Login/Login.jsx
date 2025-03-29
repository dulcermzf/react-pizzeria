import { Button } from "react-bootstrap";
import "./Login.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    status: "",
    message: "",
  });

  const { login } = useContext(UserContext)

  const handleChange = (event) => {
    const target = event.target;

    setForm({ ...form, [target.name]: target.value });
  };

  const setStatusMessage = (status, message) => {
    setMessage({ status, message });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      setStatusMessage("error", "You must fill in all the fields.");
      return;
    }

    if (password.length < 6) {
      setStatusMessage("error", "Password must be at least 6 characters.");
      return;
    }

    const logedin = login(email, password)

    setStatusMessage("success", "Succesfully Logged In");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center login-container">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
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
        {message && <p className={message.status}>{message.message}</p>}
        <div className="button-container mx-3 my-5">
          <Button type="submit" className="button-login" variant="primary">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

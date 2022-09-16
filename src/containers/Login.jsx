import React, { useRef, useContext} from "react";
import { useNavigate } from "react-router-dom";
import "@styles/login.scss";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext";

const Login = () => {
  const { saveEmail } = useContext(AppContext)
  const navigate = useNavigate();
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current);
    const logInData = {
      email: formData.get("email-input"),
      password: formData.get("password-input")
    }

    if (logInData.email !== '' && logInData.password !== '' ){
      saveEmail(logInData.email)
      navigate("/")

    }
  }

  return (
    <div className="container-login">
      <div className="form-container">
        <img
          className="form-container_img"
          src={logo}
          alt="logo"
        />
        <form className="form-container_form" action="/" ref={form}>
          <label className="form-container_label" for="email-input">
            Email address
          </label>
          <input
            className="form-container_input"
            name="email-input"
            type="text"
          />
          <label className="form-container_label" for="password-input">
            password
          </label>
          <input
            className="form-container_input"
            name="password-input"
            type="password"
          />
          <input className="primary-button" type="submit" value="log in" onClick={handleSubmit} />
        </form>

        <p className="form-container_p">
          <a className="form-container_forgot-pass" href="/">
            Forgot my password
          </a>
        </p>
        <input
          className="secondary-button"
          id="signup-button"
          type="button"
          value="sign up"
        />
      </div>
    </div>
  );
};

export default Login;

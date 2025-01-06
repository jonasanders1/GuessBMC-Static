import React, { useState } from "react";
import "../styles/forms.css";
import { NavLink } from "react-router-dom";
import Divider from "../components/form/Divider";
import CustomButton from "../components/customButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Credentials {
  email: string;
  password: string;
}

interface LoginProps {
  onLogin: (credentials: Credentials) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    onLogin(credentials); // Pass credentials to parent component
  };

  return (
    <div className="page login-page">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
          />
        </div>
        <CustomButton text="Login" onClick={() => {}} />
      </form>

      <div className="form-footer">
        Don't have an account? <NavLink to="/register">Sign Up</NavLink>
      </div>
      <Divider />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CustomButton
          text="Continue with Linkedin"
          icon={<FontAwesomeIcon icon={faLinkedin} size="lg" />}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Login;

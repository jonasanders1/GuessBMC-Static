import { useState } from "react";
import "../styles/forms.css";
import Divider from "../components/form/Divider";
import CustomButton from "../components/customButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

interface Credentials {
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterProps {
  onRegister: (credentials: Credentials) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    onRegister(userData);
  };

  return (
    <div className="register-page page">
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({
                ...userData,
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
            value={userData.password}
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({
                ...userData,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>
        <CustomButton text="Sign Up" onClick={() => {}} />
      </form>
      <div className="form-footer">
        Already have an account? <NavLink to="/login">Login</NavLink>
      </div>

      <Divider />
      <div className="linkedin-button">
        <div className="linkedin-button">
          <CustomButton
            variant="contained"
            size="medium"
            buttonColor="var(--neutral-dark-grey)"
            hoverColor="var(--primary-color)"
            text="Continue with Linkedin"
            icon={<FontAwesomeIcon icon={faLinkedin} size="lg" />}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

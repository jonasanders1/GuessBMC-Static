import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { navigateAndScroll } from "../../utils/navigation";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo" />
              <h3>Guess BMC</h3>
            </div>
            <p>
              Test din kunnskap om Business Model Canvas komponenter i dette
              interaktive spillet.
            </p>
          </div>

          <div className="footer-section">
            <h4>Lenker</h4>
            <ul>
              <li>
                <NavLink
                  to="/"
                  onClick={() => navigateAndScroll(navigate, "/")}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/game"
                  onClick={() => navigateAndScroll(navigate, "/game")}
                >
                  Play Guess BMC
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/create"
                  onClick={() => navigateAndScroll(navigate, "/create")}
                >
                  Create your own BMC
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/leaderboard"
                  onClick={() => navigateAndScroll(navigate, "/leaderboard")}
                >
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt oss</h4>
            <div className="social-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Guess the BMC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

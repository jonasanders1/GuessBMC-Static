import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Guess the BMC</h3>
            <p>
              Test your knowledge of Business Model Canvas components in this
              interactive game.
            </p>
          </div>

          <div className="footer-section">
            <h4>Lenker</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/how-to-play">How to Play</a>
              </li>
              <li>
                <a href="/leaderboard">Leaderboard</a>
              </li>
              <li>
                <a href="/about">About</a>
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

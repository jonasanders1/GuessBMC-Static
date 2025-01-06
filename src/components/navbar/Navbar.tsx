import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGamepad,
  faTrophy,
  faPlus,
  faHome,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../customButton/CustomButton";

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar = ({ isAuthenticated, onLogout }: NavbarProps) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate("/");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          borderRadius: !isMenuOpen && windowWidth < 768 ? "1rem 1rem 0 0" : "",
        }}
      >
        <div className="nav-container" >
          <div className="brand">
            <h1
              style={{
                display: isMenuOpen && windowWidth < 768 ? "none" : "block",
              }}
            >
              Guess BMC
            </h1>
          </div>

          <button className="menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                color="var(--neutral-100)"
              />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" color="var(--neutral-100)" />
            )}
          </button>

          {isAuthenticated ? (
            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {windowWidth <= 768 && <FontAwesomeIcon icon={faHome} />}
                Home
              </NavLink>
              <NavLink
                to="/game"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {windowWidth <= 768 && <FontAwesomeIcon icon={faGamepad} />}
                Guess BMC
              </NavLink>
              <NavLink
                to="/leaderboard"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {windowWidth <= 768 && <FontAwesomeIcon icon={faTrophy} />}
                Leaderboard
              </NavLink>
              <NavLink
                to="/create"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {windowWidth <= 768 && <FontAwesomeIcon icon={faPlus} />}
                Create BMC
              </NavLink>
              <CustomButton
                flex={false}
                text="Logout"
                onClick={handleLogout}
                buttonColor="var(--action-error)"
                icon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
              />
            </div>
          ) : (
            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <CustomButton
                flex={false}
                text="Login"
                onClick={() => navigate("/login")}
                icon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
              />
            </div>
          )}
        </div>
      </nav>
      {windowWidth <= 768 && (
        <div className={`nav-overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} />
      )}
    </>
  );
};

export default Navbar;

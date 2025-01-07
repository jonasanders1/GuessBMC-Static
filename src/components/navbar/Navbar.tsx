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
import logo from "../../assets/logo.png";
import { navigateAndScroll } from "../../utils/navigation";

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar = ({ isAuthenticated, onLogout }: NavbarProps) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 30);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (path: string) => {
    navigateAndScroll(navigate, path);
    setIsMenuOpen(false);
  };

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
        className={`navbar ${
          isScrolled && windowWidth >= 768 ? "scrolled" : ""
        }`}
        style={{
          borderRadius: !isMenuOpen && windowWidth < 768 ? "1rem 1rem 0 0" : "",
        }}
      >
        <div className="nav-container">
          <button className="brand" onClick={() => navigate("/")}>
            <img
              src={logo}
              alt="Guess BMC"
              width={windowWidth < 768 ? 30 : 50}
              style={{
                display: isMenuOpen && windowWidth < 768 ? "none" : "block",
              }}
            />
            <h1
              style={{
                display: isMenuOpen && windowWidth < 768 ? "none" : "block",
              }}
            >
              Guess BMC
            </h1>
          </button>

          <button className="menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                color="var(--neutral-100)"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                color="var(--neutral-100)"
              />
            )}
          </button>

          {isAuthenticated ? (
            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <NavLink
                to="/"
                onClick={() => handleNavLinkClick("/")}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {windowWidth <= 768 && <FontAwesomeIcon icon={faHome} />}
                Hjem
              </NavLink>
              <NavLink
                to="/game"
                onClick={() => handleNavLinkClick("/game")}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {windowWidth <= 768 && <FontAwesomeIcon icon={faGamepad} />}
                Spill
              </NavLink>
              <NavLink
                to="/leaderboard"
                onClick={() => handleNavLinkClick("/leaderboard")}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {windowWidth <= 768 && <FontAwesomeIcon icon={faTrophy} />}
                Ledertavle
              </NavLink>
              <NavLink
                to="/create"
                onClick={() => handleNavLinkClick("/create")}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {windowWidth <= 768 && <FontAwesomeIcon icon={faPlus} />}
                Lag BMC
              </NavLink>
              <CustomButton
                flex={false}
                text="Logout"
                variant="contained"
                size="small"
                onClick={handleLogout}
                buttonColor="var(--action-error)"
                hoverColor="red"
                icon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
              />
            </div>
          ) : (
            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <CustomButton
                flex={false}
                text="Login"
                variant="contained"
                size="small"
                onClick={() => navigateAndScroll(navigate, "/login")}
                icon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
              />
            </div>
          )}
        </div>
      </nav>
      {windowWidth <= 768 && (
        <div
          className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;

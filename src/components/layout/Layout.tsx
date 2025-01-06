import { Outlet } from "react-router-dom";
import "./layout.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface LayoutProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <div className="app-container">
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />

      <main className="main">
        <div className="main-content">
        <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

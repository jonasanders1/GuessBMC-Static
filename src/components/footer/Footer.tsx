import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} BMC Game</p>
    </footer>
  );
};

export default Footer;

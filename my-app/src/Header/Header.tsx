import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact-me">Contact</Link>
    </nav>
  );
};

export default Header;

import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <h2 className={styles.backgroundTest}>Bohdana Klymenko</h2>
      <nav>
        <Link to="/">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact-me">Contact</Link>
      </nav>
    </>
  );
};

export default Header;

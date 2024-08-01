import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.background}>Bohdana Klymenko</h2>
        <nav className={styles.navbarLayout}>
          <Link to="/">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact-me">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

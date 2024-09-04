import styles from "./index.module.scss";

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.footer}>
        <ul className={styles.footerLayout}>
          <li className={styles.footerRefs}>
            <a href="mailto:contact.kbohdana@gmail.com">
              contact.kbohdana@gmail.com
            </a>
          </li>
          <li className={styles.footerRefs}>
            <a href="tel:+380680157956">+38 &#40;068&#41; 015-79-56</a>
          </li>
          <li className={styles.footerRefs}>
            <a
              href="https://www.linkedin.com/in/bohdana-klymenko-254472176/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <h4 className={styles.footerCreator}>Bohdana Klymenko</h4>
      </div>
    </>
  );
};

export default Footer;

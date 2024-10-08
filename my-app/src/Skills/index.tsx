import styles from "./index.module.scss";

const Skills: React.FC = () => {
  return (
    <ul className={styles.skillsLayout}>
      <li className={styles.progressBars}>
        <label htmlFor="htmlLevel">HTLM: </label>
        <progress
          id="htmlLevel"
          max="100"
          value="85"
          className={styles.progressColor}
        >
          85%
        </progress>
      </li>
      <li className={styles.progressBars}>
        <label htmlFor="cssLevel">CSS: </label>
        <progress id="cssLevel" max="100" value="85">
          85%
        </progress>
      </li>
      <li className={styles.progressBars}>
        <label htmlFor="jsLevel">Javascript: </label>
        <progress id="jsLevel" max="100" value="70">
          70%
        </progress>
      </li>
      <li className={styles.progressBars}>
        <label htmlFor="reactLevel">React: </label>
        <progress id="reactLevel" max="100" value="55">
          55%
        </progress>
      </li>
      <li className={styles.progressBars}>
        <label htmlFor="gitLevel">Git: </label>
        <progress id="gitLevel" max="100" value="58">
          58%
        </progress>
      </li>
    </ul>
  );
};

export default Skills;

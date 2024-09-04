import photo from "./aboutPFP.jpg";
import styles from "./index.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <p className={styles.about_desc}>
        I'm a developer in training and still very much at the beginning of my
        journey. It started with some projects created as a part of SheCodes
        Workshops! I am currently learning React and I am also seeking the
        opportunities to improve my skills. If you want to take a closer look of
        what I am up to, check out my Projects page!
      </p>
      <div className={styles.about_avatar}>
        <img src={photo} alt="personalPhoto" />
      </div>
    </div>
  );
};

export default About;

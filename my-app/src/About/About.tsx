import Header from "../Header/Header";
import photo from "./aboutPFP.jpg";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.aboutLayout}>
        <p className={styles.descriptionABout}>
          I'm a developer in training and still very much at the beginning of my
          journey. It started with some projects created as a part of SheCodes
          Workshops! I am currently learning React and I am also seeking the
          opportunities to improve my skills. If you want to take a closer look
          of what I am up to, check out my Projects page!
        </p>
        <img src={photo} alt="personalPhoto" className={styles.avatar} />
      </div>
    </>
  );
};

export default About;

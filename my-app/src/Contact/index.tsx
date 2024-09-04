import Header from "../Header";
import Form from "../Form/Form";
import styles from "./index.module.scss";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactLayout}>
      <h2>Contact me:</h2>
      <Form />
    </div>
  );
};

export default Contact;

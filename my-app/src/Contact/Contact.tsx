import Header from "../Header/Header";
import Form from "../Form/Form";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.contactLayout}>
        <h2>Contact me:</h2>
        <Form />
      </div>
    </>
  );
};

export default Contact;

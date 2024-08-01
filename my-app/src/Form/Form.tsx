import styles from "./Form.module.scss";

const Form: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Enter your name:</label>
        <br />
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Provide your email address:</label>
        <br />
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="contactingReasons">Choose topic:</label>
        <br />
        <input name="contactingReasons" id="contactingReasons" list="reasons" />
        <datalist id="reasons">
          <option value="Work query"></option>
          <option value="Other"></option>
        </datalist>
      </div>
      <div>
        <label htmlFor="message">Enter your query:</label>
        <br />
        <input
          type="text"
          name="message"
          id="message"
          className={styles.messageField}
        />
      </div>
      <div>
        <input type="submit" value="Send the query!" />
      </div>
    </form>
  );
};

export default Form;

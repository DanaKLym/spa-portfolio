import { useState } from "react";
import styles from "./Form.module.scss";

const Form: React.FC = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
    reasons: "",
  });
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault;
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Enter your name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          required
          value={value.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Provide your email address:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          required
          value={value.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contactingReasons">Choose topic:</label>
        <br />
        <select
          name="reasons"
          id="contactingReasons"
          value={value.reasons}
          onChange={handleChange}
        >
          <option value="">Please, choose an option</option>
          <option value="Work query">Work query</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Enter your query:</label>
        <br />
        <textarea
          name="message"
          id="message"
          value={value.message}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="submit" value="Send the query!" />
      </div>
    </form>
  );
};

export default Form;

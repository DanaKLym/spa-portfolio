import { useState } from "react";
import styles from "./Form.module.scss";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reasons, setReasons] = useState("reasons");

  const clearForm = () => {
    setName("");
    setEmail("");
    setReasons("reasons");
    setMessage("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Reasons:", reasons);
    console.log("Message:", message);
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter your name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="contactingReasons">Choose topic:</label>
        <br />
        <select
          name="reasons"
          id="contactingReasons"
          value={reasons}
          onChange={(e) => {
            setReasons(e.target.value);
          }}
        >
          <option value="reasons">Please, choose an option</option>
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
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div>
        <input type="submit" value="Send the query!" />
      </div>
    </form>
  );
};

export default Form;

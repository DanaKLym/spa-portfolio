const Form: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Enter your name:</label>
        <br />
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Provide your email address:</label>
        <br />
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Enter your query:</label>
        <br />
        <input type="text" name="message" id="message" />
      </div>
    </form>
  );
};

export default Form;

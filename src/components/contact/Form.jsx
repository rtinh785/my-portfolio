const Form = () => {
  return (
    <form action="" className="contact__form">
      <div className="contact__form-group">
        <div className="contact__form-div">
          <input
            type="text"
            className="contact__form-input"
            placeholder="Insert your name"
          />
        </div>

        <div className="contact__form-div">
          <input
            type="email"
            className="contact__form-input"
            placeholder="Insert your email"
          />
        </div>
      </div>

      <div className="contact__form-div">
        <input
          type="text"
          className="contact__form-input"
          placeholder="Insert your subject"
        />
      </div>

      <div className="contact__form-div">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="contact__form-input message"
          placeholder="Write your message "
        ></textarea>
      </div>
      <button className="btn ">Send message</button>
    </form>
  );
};

export default Form;

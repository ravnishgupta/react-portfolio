import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';


function ContactForm () {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
    } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      console.log('errorMessage', errorMessage);
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
        <h2>Contact Me</h2>
        <form id='contact-form' onSubmit={handleSubmit}>
            <div className='py-2'>
                <label htmlFor="name">Name:</label>
                <input type='text' name='name' defaultValue={name} onBlur={handleChange}  />
            </div>
            <div className='py-2'>
                <label htmlFor="email">Email:</label>
                <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
            </div>
            {errorMessage && (
                <div className='py-2'>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <div className='py-2'>
                <label htmlFor="message">Message:</label>
                <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
            </div>
            <div className="row py-2">
              <div className="col align-items-center">
                <button type='submit' className="btn btn-secondary">Submit</button>
              </div>
            </div>
        </form>
    </section>
  );

}

export default ContactForm;
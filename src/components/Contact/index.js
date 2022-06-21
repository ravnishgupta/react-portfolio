import React, {useState} from "react";
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';


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
          setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
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
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name='name' aria-describedby="emailHelp" placeholder="Enter name" defaultValue={name} onBlur={handleChange}  />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name='message' rows='5' className="form-control" defaultValue={message} onBlur={handleChange} />
          </div>
          <div className="form-group py-2">
                <button type='submit' className="btn btn-primary" >Submit</button>
          </div>
          {errorMessage && (
            <div className='form-group'>
                <p className="text-danger">{errorMessage}</p>
            </div>
          )}
        </form>
    </section>
  );

}

export default ContactForm;
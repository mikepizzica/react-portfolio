import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xpzbdzjv");
  if (state.succeeded) {
      return <section><p id="submit-confirm">Message Sent!</p></section>;
  }
  return (
    <section id="contact">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Name:</label>
        <input id="name" type="name" name="name" required="required"/>
        <ValidationError prefix="Name" field="name"errors={state.errors}/><br/>

        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" name="email" required="required"/>
        <ValidationError prefix="Email" field="email"errors={state.errors}/><br/>

        <label for="message">Message:</label><br/>
        <textarea id="message" name="message" rows="10" cols="100" required="required"/><br/>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
        
        <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
    </section>
  );
}
function Contact2() {
  return (
    <ContactForm />
  );
}
export default Contact2;
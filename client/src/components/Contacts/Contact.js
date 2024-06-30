import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
      <p>Email: <a href="mailto:ashavsky_db@yahoo.es">ashavsky_db@yahoo.es</a></p>
      <p>Phone: +972-58-798-6366</p>
      <p>Telegram: <a href="https://t.me/ashavsky_db">@ashavsky_db</a></p>
      <p>Instagram: <a href="https://www.instagram.com/ashavsky_db/" target="_blank" rel="noopener noreferrer">ashavsky_db</a></p>
      <p>Facebook: <a href="https://www.facebook.com/ashavskiydb/" target="_blank" rel="noopener noreferrer">Dmitry Ashavskiy</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ashavsky-db/" target="_blank" rel="noopener noreferrer">ashavsky-db</a></p>
      <p>GitHub: <a href="https://github.com/ashavskydb" target="_blank" rel="noopener noreferrer">ashavskydb</a></p>
    </section>
  );
}

export default Contact;

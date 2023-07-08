import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { PiTelegramLogoLight } from 'react-icons/pi'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iva95t6', 'template_105eyyu', form.current, '3LSucGEWU6Wt1r5BG')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>contact@chiguichon.me</h5>
            <a href="mailto:contact@chiguichon.me">Send an email</a>
          </article>
          <article className="contact__option">
            <PiTelegramLogoLight className='contact__option-icon' />
            <h4>Telegram</h4>
            <a href="https://t.me/Chiguichon" target="_blank">Contact me on Telegram</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email address' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
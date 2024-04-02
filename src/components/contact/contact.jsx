import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
function Contact(){
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7pld9u6', 'template_jvcdehs', form.current, {
            publicKey: 'Nce5bwHWE3-gXvm-9',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        e.target.reset()  
      };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdEmail className="contact_option_icon"/>
                        <h4>Email</h4>
                        <h5>varunrram2003@gmail.com</h5>
                        <a href="mailto:varunrram2003@gmail.com" target="_blank">t</a>
                    </article>
                    <article className="contact_option">
                        <FaWhatsapp className="contact_option_icon"/>
                        <h4>WhatsApp</h4>
                        <h5>varunrram2003@gmail.com</h5>
                        <a href="https://wa.me/918124806811" target="_blank">t</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea className="text" name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )   
}
export default Contact
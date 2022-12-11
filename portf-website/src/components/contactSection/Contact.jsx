import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
    const onSubmit = () => {
    // Show the success message in a window
            window.alert("Your submission was successful!");
    };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_08rm8j8', 'template_yg6vd7d', form.current, '9zLGSAFF6rZ-H3LWn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id='contact'>
            <h5> Get In Touch</h5>
            <h2>Contact Me</h2> 
            <div className= "container contact_container">
                <div className= "contact_options">
                    <article className="contact_option">
                        <HiOutlineMail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>w13801166064@gmail.com</h5>
                        <a href="mailto:w13801166064@gmail.com">Send a message</a>
                    </article>    
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required/>
                    <input type = "email" placeholder="Your Email" required/>
                    <textarea name="message" rows='7' placeholder="Your Message" required></textarea>
                    <button type="submit" className='btn btn-primary' onClick={onSubmit}>Send Message</button>

                </form>
            </div>
           
        </section>
    )
}

export default Contact

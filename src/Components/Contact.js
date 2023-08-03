import React, { useRef } from 'react';
import './Contact.css';
import polygon from '../Images/polygon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
          
    const sendEmail = (e) => {
        e.preventDefault();
          
        emailjs.sendForm('service_dzhicf6', 'template_dzb5dgi', form.current, 'GkPNGyCSaCXTRy0D7')
        .then((result) => {
            form.current?.reset();
            document.getElementById("approve").style.opacity = "100";
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div class="contact" id="contact">
            <div class="contactcopy">
                <img src={polygon} alt="polygon" class="polygon" />
                <h3>Don't be shy! Hit me up!</h3>
                <img src={polygon} alt="polygon" class="polygon" />
            </div>
            <div class="contactform">
                <h1>Contact me</h1>
                <div class="contactformreal">
                    <form ref={form} onSubmit={sendEmail} class="contactformreal">
                        <div class="firstrow">
                            <input type="text" name="from_name" class="text" placeholder="Name*" maxLength={30} required/>
                            <input type="email" name="user_email" class="text" placeholder="Email*" maxLength={30} required/>
                        </div>
                        <textarea name="message" id="message" placeholder="Your message here*" maxLength={400} required></textarea>
                        <button name="submit" value="Send" id="submit" type="submit"><p id="mess">SEND MESSAGE</p></button>
                    </form>
                    <p id="approve">Your mail has been succesfully sent!</p>
                </div>
            </div>
        </div>             
    );
}

export default Contact;
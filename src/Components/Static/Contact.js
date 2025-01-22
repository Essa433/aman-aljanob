import React, { useState } from 'react';
import './Static.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API)
        console.log({ name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
           
        <div className="contact-page">
            <h1>تواصل معنا </h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">الاسم:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">البريد الإلكتروني:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">رسالتك:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">إرسال</button>
            </form>
</div>
    );
}


export default Contact;
import React from 'react';
import './Static.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li>
                        <h3>من نحن</h3>
                    </li>
                    <li className="footer-location">
                        <h3>موقعنا</h3>
                        <p>مؤسسة أمان الجنوب للسلامة والأطفاء </p>
                        <p>7000، 3043 شارع حمزة بن عبدالمطلب، المفرق، نجران 66255 7000، 66255</p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.782328434577!2d44.22619931531613!3d17.491803087997336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f631e4d005ead57%3A0xa812f4a650e24b68!2s7000%2C%203043%20Street%20Hamza%20Bin%20Abd%20AlMuttalib%2C%20Al-Mafraq%2C%20Najran%2066255%207000!5e0!3m2!1sen!2ssa!4v1616859099057!5m2!1sen!2ssa" 
                            width="300" 
                            height="250" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy">
                        </iframe>
                    </li>
                    <li>
                        <h3>تواصل معنا</h3>
                        <p>واتساب:</p>
                        <p>0505232710</p>
                        <p>0549207067</p>
                    </li>
                </ul>
            </div>
            <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <nav className="navbar">
            <div>
            <Link to="/"><h1 className="logo">Logo</h1> </Link>
            </div>
            <div className={`nav-link ${menuOpen ? "show" : ""}`} id="navLinks">
                <Link to="/">الرئيسية</Link>
                <Link to="/about">حول</Link>
                <Link to="/about-us">من نحن</Link>
                <Link to="/Services">الخدمات</Link>
                <Link to="/Products">المنتجات</Link>
                <Link to="/contact">التواصل</Link>
            </div>
            <div>
                <input 
                    name="label" 
                    className="switch fas fa-moon" 
                    type="checkbox" 
                    id="Switch" 
                    checked={darkMode} 
                    onChange={() => setDarkMode(!darkMode)}
                    aria-label="Dark mode toggle"
                />
                <label htmlFor="Switch" className="switch-label"></label>
            </div>
            {isMobile && (
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            )}
        </nav>
    );
}

export default Navbar;
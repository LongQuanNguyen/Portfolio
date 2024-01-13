import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import './mediaqueries.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">Long Quan</div>
                <div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <nav id="hamburger-nav">
                <div className="logo">Long Quan</div>
                <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
                    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
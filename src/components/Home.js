import React, { useState, useEffect } from 'react';
import './Home.css';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import resume from '../assets/LongQuanNguyen (Tony) Resume.pdf';

const Home = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    // Make name change every 2 seconds
    const [name, setName] = useState('Long Quan 🇻🇳');
    useEffect(() => {
        const interval = setInterval(() => {setName(prevName => prevName === 'Long Quan 🇻🇳' ? 'aka Tony 🇨🇦' : 'Long Quan 🇻🇳');}, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src={profilePic} alt="tony pfp" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">{name}</h1>
                <p className="section__text__p2">CompSci Enthusiast</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={() => openInNewTab(resume)}>Download CV</button>
                    <a href="/portfolio/Links/index.html" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-color-1">My Links</button>
                    </a>
                </div>
                <div id="socials-container">
                    <img src={linkedinIcon} alt="My LinkedIn profile" className="icon" onClick={() => openInNewTab('https://www.linkedin.com/in/longquannguyen/')}/>
                    <img src={githubIcon} alt="My Github profile" className="icon" onClick={() => openInNewTab('https://github.com/LongQuanNguyen')}/>
                </div>
            </div>
        </section>
    );
}

export default Home;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact';
import Footer from './components/Footer.js';

function App() {
    return (
        <Router>
            <Header />
            <Home />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
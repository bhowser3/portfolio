
// import { useState, useEffect } from 'react';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import './styles/App.css';
import './styles/Projects.css';
import './styles/About.css';
import './styles/HoverEffects.css';
import './styles/Navigation.css';

function App() {
  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({block:'start', inline:'nearest'}); // behavior handled by CSS
  };

  return (
    <div className="portfolio-bg">
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('project1')} className="nav-link">Discord & GroupMe Cross Connect</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('project2')} className="nav-link">Reddit Sports Bot</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('project3')} className="nav-link">3D Printed Homelab Rack</button>
          </li>
        </ul>
      </nav>
      <div className="content-wrapper">
        <div id="about" className="about-container">
          <h1 className="about-title">Ben Howser</h1>
          <h2 className="about-role">Full Stack Software Engineer</h2>
          <p className="about-text">
            Hello! My name is Ben Howser I am an experienced full stack software engineer. 
            I have a passion for problem solving! I am organized, communicative, dependable, prepaired, detail oriented, and self-motivated.
            Developing scalable web apps is what gets me up in the morning.
            Everything from front-end React pages, serverless functions with AWS Lambda,
            to back-end APIs with Node.js and Express you name it I've done it. 
            My excitment for IT goes beyond coding.
            I am an avid Homelabber, I built a custom 3D printed rack system along with networking switches, RaspberryPis, Router, and more.
            On this portfolio, you'll find a selection of my projects that showcase my skills and my love for everything in the IT world!
          </p>
        </div>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    </div>
  );
}

export default App;

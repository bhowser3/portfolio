
import { useState, useEffect } from 'react';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import './styles/App.css';
import './styles/Projects.css';
import './styles/About.css';
import './styles/HoverEffects.css';
import './styles/Navigation.css';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 140;
      const startPosition = window.pageYOffset;
      const distance = offsetTop - startPosition;
      const duration = 610;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        const easeInOutCubic = percentage < 0.5 
          ? 4 * percentage * percentage * percentage 
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic);
        
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  };

  return (
    <div className="portfolio-bg">
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('project1')} className="nav-link">D2G CC</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('project2')} className="nav-link">Project 2</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('project3')} className="nav-link">Project 3</button>
          </li>
        </ul>
      </nav>
      <div className="content-wrapper">
        <div id="about" className="about-container">
          <h1 className="about-title">Ben Howser</h1>
          <h2 className="about-role">Full Stack Software Engineer</h2>
          <p className="about-text">
            Hello! My name is Ben Howser I am an experienced full stack software engineer. 
            I have a passion for problem solving! 
            Developing scalable web apps is what gets me up in the morning.
            Everything from responsive front-end React pages, serverless functions with AWS Lambda,
            to robust back-end APIs with Node.js and Express you name it I've done it. 
            My excitment for IT goes beyond coding.
            I am an avid Homelabber, I built a custom 3D printed rack system along with networking switches, RaspberryPis, Router, and more.
            On this portfolio, you'll find a selection of my projects that showcase my skills and dedication to creating efficient and effective software solutions.
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

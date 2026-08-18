import React from "react";
import '../assets/styles/Main.scss';
import fototessera from "../assets/images/fototessera.jpeg";
import forestVideo from "../assets/videos/forest.mp4";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

function Main() {
  return (
    <div className="container hero-with-video" id="home">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={forestVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="image-wrapper">
          <img src={fototessera} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/camiearth/camiearth" target="_blank" rel="noreferrer">
              <GitHubIcon sx={{ color: '#fff', fontSize: '2.2rem' }} />
            </a>
            <a href="https://www.linkedin.com/in/camillaloconte/" target="_blank" rel="noreferrer">
              <LinkedInIcon sx={{ color: '#fff', fontSize: '2.2rem' }} />
            </a>
          </div>
          <h1 className="main-title" style={{ color: '#fff' }}>Camilla L.C.</h1>
          <p className="subtitle-green" style={{ color: '#4b9d5b' }}>Computational Scientist</p>
          <p className="tagline" style={{ color: '#fff' }}>AI PhD Researcher @ICIQ &nbsp;|&nbsp; | AI & Machine Learning &nbsp;|&nbsp; Quantum Chemistry</p>

          <div className="hero-buttons">
            <Button
              className="btn-primary"
              sx={{ textTransform: 'none' }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
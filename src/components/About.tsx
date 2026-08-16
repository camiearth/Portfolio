import React from "react";

import "../assets/styles/About.scss";
import SectionImageBackground from "./imagebackground";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function About() {
  return (
    <SectionImageBackground>
      <section className="about-section" id="about">

        {/* Dark overlay */}
        <div className="about-overlay" />

        <div className="about-inner">

          {/* =========================
              LEFT: TEXT CONTENT
              ========================= */}
          <div className="about-text">

            <span className="about-label">
              ABOUT ME
            </span>

            <div className="about-description">

              <p>
                Hola :) 
                I'm Cami, a computational scientist with expertise in AI-driven materials discovery. I completed my studies in Chemistry and Computational Bioengineering.
              </p>

              <p>
                Currently, I am a PhD student at ICIQ working on developing machine learning models for sustainable energy materials, focusing on the intersection of artificial intelligence, chemistry, and physics.
              </p>

              <p>
                When I'm not coding, you'll find me cycling through nature or surfing, both are my go-to ways to recharge and find inspiration.
              </p>

            </div>

          </div>


          {/* =========================
              RIGHT: KEY ACHIEVEMENTS
              ========================= */}
          <div className="achievements-box">
            <h3>Key Achievements</h3>
            <div className="achievement-item">
              <h4>AI Researcher @ ICIQ</h4>
              <p>AI for Materials Science</p>
            </div>
            <div className="achievement-item">
              <h4>MSc Computational Bioengineering</h4>
              <p>Universitat Pompeu Fabra</p>
            </div>
            <div className="achievement-item">
              <h4>MSc Chemistry</h4>
              <p>University of Turin</p>
            </div>
            <div className="achievement-item">
              <h4>BSc Chemistry</h4>
              <p>University of Turin</p>
            </div>
          </div>


          {/* =========================
              (HIDDEN) AI / MOLECULE VISUAL
              ========================= */}
          <div className="about-visual">

            <div className="molecule-orbit orbit-one" />
            <div className="molecule-orbit orbit-two" />
            <div className="molecule-orbit orbit-three" />

            <div className="molecule-bond bond-one" />
            <div className="molecule-bond bond-two" />
            <div className="molecule-bond bond-three" />

            <div className="molecule-dot dot-one" />
            <div className="molecule-dot dot-two" />
            <div className="molecule-dot dot-three" />
            <div className="molecule-dot dot-four" />
            <div className="molecule-dot dot-five" />

            <div className="ai-icon">
              <AutoAwesomeIcon />
              <span>AI</span>
            </div>

          </div>

        </div>

      </section>
    </SectionImageBackground>
  );
}

export default About;
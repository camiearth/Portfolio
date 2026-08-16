import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import SectionImageBackground from "./imagebackground";

function Project() {
  return (
    <SectionImageBackground>
      <div className="container content-section" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">

          {/* AirAware Routes */}
          <div className="project-card">
            <div className="project-image">
              <img src={mock07} alt="AirAware Routes" />
            </div>
            <div className="project-content">
              <h2>AirAware Routes</h2>
              <p>
                A personal project that helps Barcelona's running community discover the cleanest routes by analyzing local air pollution levels.
              </p>
              <p className="project-repo">
                <a href="https://github.com/camiearth/AirAware-Routes" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </div>
          </div>

          {/* VibraCLIP */}
          <div className="project-card">
            <div className="project-image">
              <img src={mock09} alt="VibraCLIP" />
            </div>
            <div className="project-content">
              <h2>VibraCLIP</h2>
              <p>
                Implemented VibraCLIP by introducing a control parameter to simulate missing spectral data and designing a training strategy that freezes weight updates when IR or Raman spectra are absent, improving model robustness.
              </p>
              <p className="project-repo">
                <a href="https://github.com/LopezGroup-ICIQ/vibraclip" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </div>
          </div>

          {/* Knowledge Graph Embedding */}
          <div className="project-card">
            <div className="project-image">
              <img src={mock10} alt="Knowledge Graph Embedding" />
            </div>
            <div className="project-content">
              <h2>Knowledge Graph Embedding</h2>
              <p>
                Developed a toolkit for constructing knowledge graphs, generating embeddings, and training machine learning models. Applied it to predictive analysis for biomedical research and drug repurposing.
              </p>
              <p className="project-repo">
                <a href="https://github.com/camiearth/Graph-Embedding-Toolkit" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </div>
          </div>

          {/* Virtual Drug Screening */}
          <div className="project-card">
            <div className="project-image">
              <img src={mock08} alt="Virtual Drug Screening" />
            </div>
            <div className="project-content">
              <h2>Virtual Drug Screening</h2>
              <p>
                Screened several bioactive compounds against TNF-α in Rheumatoid Arthritis and natural drug candidates for SARS-CoV-2. (MVS-Pharma)
              </p>
            </div>
          </div>

        </div>
      </div>
    </SectionImageBackground>
  );
}

export default Project;
import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import SectionImageBackground from "./imagebackground";

const labelsFirst = [
    "Artificial Intelligence",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Deep Learning",
    "Graph Neural Networks",
];

const labelsSecond = [
    "Formulation",
    "Molecular Docking",
    "GROMACS",
    "AutoDock Vina",
    "UCSF Chimera",
    "DFT"
];

const labelsThird = [
    "MATLAB",
    "Python",
    "RDKit",
    "ASE",
    "Pymatgen",
    "R",
    "Data Analysis and Visualization",
    "Linux",
    "HPC",
    "MongoDB",
    "SQL"
];

function Expertise() {
    return (
        <SectionImageBackground>
            <div className="container content-section" id="expertise">
                <div className="skills-container">
                    <h1>Expertise</h1>

                    <div className="skills-grid">

                        {/* AI & MACHINE LEARNING */}
                        <div className="skill">
                            <FontAwesomeIcon icon={faBrain} size="3x" />

                            <h3>AI & Machine Learning</h3>

                            <p>
                                I develop and apply machine learning models to
                                analyze experimental and synthetic data.
                            </p>

                            <div className="flex-chips">
                                <span className="chip-title"></span>

                                {labelsFirst.map((label, index) => (
                                    <Chip
                                        key={index}
                                        className="chip"
                                        label={label}
                                    />
                                ))}
                            </div>
                        </div>


                        {/* CHEMISTRY */}
                        <div className="skill">
                            <FontAwesomeIcon icon={faReact} size="3x" />

                            <h3>Chemistry</h3>

                            <p>
                                Strong background in 
                                organic chemistry, medicinal
                                chemistry, quantum chemistry, and catalysis.
                            </p>

                            <div className="flex-chips">
                                <span className="chip-title"></span>

                                {labelsSecond.map((label, index) => (
                                    <Chip
                                        key={index}
                                        className="chip"
                                        label={label}
                                    />
                                ))}
                            </div>
                        </div>


                        {/* SCIENTIFIC COMPUTING */}
                        <div className="skill">
                            <FontAwesomeIcon icon={faPython} size="3x" />

                            <h3>Scientific Computing</h3>

                            <p>
                                Experience in scientific programming, numerical
                                modeling, HPC environments and data-driven analysis.
                            </p>

                            <div className="flex-chips">
                                <span className="chip-title"></span>

                                {labelsThird.map((label, index) => (
                                    <Chip
                                        key={index}
                                        className="chip"
                                        label={label}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </SectionImageBackground>
    );
}

export default Expertise;
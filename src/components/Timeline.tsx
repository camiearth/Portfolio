import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import SectionImageBackground from "./imagebackground";

function Timeline() {
  return (
    <SectionImageBackground>
      <div className="container content-section" id="history">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - present"
            iconStyle={{ background: '#e3ebe9', color: 'rgb(14, 14, 12)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">PhD Researcher </h3>
            <h4 className="vertical-timeline-element-subtitle">Spain</h4>
            <p>
              I am focusing on AI-powered discovery of materials for sustainable energy.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#e3ebe9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Chemical Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Greece</h4>
            <p>
              Applied computational and AI/ML methods to optimize chemical reactions and material properties, performed data analysis and simulations, and led cross-functional project management across engineering, chemical, and pharmaceutical sectors.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#e3ebe9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Spain</h4>
            <p>
              Created and managed high-quality annotated datasets to improve AI systems such as virtual assistants and speech recognition, collaborating closely with testing and engineering teams to enhance model performance.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </SectionImageBackground>
  );
}

export default Timeline;
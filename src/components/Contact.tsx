import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to connect with me on LinkedIn or reach out via email 😊</p>
          <Box className="contact-links" display="flex" gap={3} flexWrap="wrap">
            {/* LinkedIn Button with modern style */}
            <Button
              variant="outlined"
              color="primary"
              startIcon={<LinkedInIcon style={{ color: '#0A66C2' }} />}
              href="https://www.linkedin.com/in/camillaloconte/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: '12px',
                padding: '10px 20px',
                fontWeight: 600,
                textTransform: 'none',
              }}
            >
              LinkedIn
            </Button>

            {/* Email Button with mailbox icon */}
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<MailOutlineIcon style={{ color: '#cb1b1b' }} />}
              href="mailto:camillalocontewk@gmail.com"
              sx={{
                borderRadius: '12px',
                padding: '20px 20px',
                fontWeight: 600,
                textTransform: 'none',
                color: '#cb1b1b',
                borderColor: '#cb1b1b',
                '&:hover': {
                   borderColor: '#cb1b1b',
                },
              }}
            >
              Email Me
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

<div
  id="contact"
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // takes full viewport height
    textAlign: 'center', // center text inside
    padding: '20px',
  }}
>
  <div className="items-container">
    <div className="contact_wrapper">
      <h1>CONTACT</h1>
      <p>Feel free to connect with me on LinkedIn, or send me an email 😊</p>
      <Box className="contact-links" display="flex" gap={3} flexWrap="wrap" justifyContent="center">
        {/* Buttons */}
      </Box>
    </div>
  </div>
</div>
export default Contact;

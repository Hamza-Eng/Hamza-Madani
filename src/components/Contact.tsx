import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  // Replace with your actual email address
  const emailAddress = "madani.hamza@outlook.com";
  const subject = encodeURIComponent("Portfolio Inquiry");
  const body = encodeURIComponent("Hi, I would like to get in touch with you!");

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box className='contact-form'>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              href={`mailto:${emailAddress}?subject=${subject}&body=${body}`}
             sx={{
                mt: 2,
                background: 'linear-gradient(90deg,rgb(54, 3, 108) 0%,rgb(7, 64, 161) 100%)', // Example gradient
                color: '#fff',
                boxShadow: '0 4px 20px 0 rgba(42, 110, 255, 0.2)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
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

export default Contact;
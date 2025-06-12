import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQHe0lqDUC2DIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727692535607?e=1753315200&v=beta&t=1N4xmkOgq0_2ZoIqjdlyCZeJkbfVy1XWqx5Z11IoyfQ" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Hamza-Eng" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hamza-madani/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:madani.hamza@outlook.com" target="_blank" rel="noreferrer"><EmailIcon/></a>

          </div>
          <h1>Hamza Madani</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Hamza-Eng" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hamza-madani/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:madani.hamza@outlook.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
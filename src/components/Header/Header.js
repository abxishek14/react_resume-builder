import React from "react";
import resumeSvg from "../../assets/resume.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import githubSvg from "../../assets/github.svg";
import websiteSvg from "../../assets/website.svg";
import instagramSvg from "../../assets/instagram.svg";

import styles from "./Header.module.css";

function Header() {
  const scrollToBody = () => {
    const bodySection = document.getElementById("BodySection");
    bodySection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Resume</span> Builder
        </p>
        <p className={styles.subHeading}>
          Customise Resume <span>Absolutely Free</span>
        </p>
        <button className={`glowing-btn ${styles.buildButton}`} onClick={scrollToBody}>
          Click Here To Start
        </button>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      <div className={styles.developerInfo}>
        Developed By <span>Abhishek</span>
        <div className={styles.socialLinks}>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <img src={websiteSvg} alt="Website" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-singh-29831a286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinSvg} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/abxishek14/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubSvg} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/abxishek14?utm_source=qr&igsh=MXRmdzhkeml2ZnZpMA== "
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramSvg} alt="Insta" />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </div>
  );
}

export default Header;

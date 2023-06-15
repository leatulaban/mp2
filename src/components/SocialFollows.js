import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram,
    faDiscord
  } from "@fortawesome/free-brands-svg-icons";
  import {  faAngleDown } from "@fortawesome/free-solid-svg-icons";

function SocialFollows() {
  return (
    <div className="social-container">
        
        <a href="https://www.linkedin.com/"
        >
        <FontAwesomeIcon icon={faLinkedin} className="linkedin-social" size="2xl" style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.discord.com" className="twitter-social">
        <FontAwesomeIcon icon={faDiscord} size="2xl" style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.facebook.com"
        className="facebook-social">
        <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.twitter.com" className="twitter-social">
        <FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.instagram.com"
        className="instagram-social">
        <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.github.com"
        className="github-social">
        <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <div className="arrow">
        <a href="#Contact">
      <FontAwesomeIcon icon={faAngleDown} size="2xl" style={{color: "#ffffff", justifyContent:"center"}} />
      </a>
      </div>
    </div>
  )
}

export default SocialFollows;
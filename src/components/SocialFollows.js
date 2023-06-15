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
        
        <a href="https://www.linkedin.com/">
        <FontAwesomeIcon className="linked" icon={faLinkedin}  size="2xl" 
        style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.discord.com" >
        <FontAwesomeIcon className="discord" icon={faDiscord} size="2xl" 
        style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.facebook.com">
        <FontAwesomeIcon icon={faFacebook} size="2xl" className="fb"
        style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.twitter.com">
        <FontAwesomeIcon className="twitter" icon={faTwitter} size="2xl" 
        style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.instagram.com">
        <FontAwesomeIcon className="insta" icon={faInstagram} size="2xl" 
        style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <a href="https://www.github.com">
        <FontAwesomeIcon className="github" icon={faGithub} size="2xl" 
        style={{color: "#ffffff", padding: '10px', fontSize:"50px"}} />
      </a>
      <div className="arrow">
        <a href="#Contact">
      <FontAwesomeIcon className="barrow" icon={faAngleDown} size="2xl" style={{color: "#ffffff", justifyContent:"center"}} />
      </a>
      </div>
    </div>
  )
}

export default SocialFollows;
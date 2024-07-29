import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const SocialMediaIcons = ({facebook, twiter, instagram, linkedin}) => {
  return (
      <div className="social-media-container text-white space-x-7 w-full my-5">
        <a href={twiter} aria-label="Twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href={facebook} aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href={instagram} aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href={linkedin} aria-label="Instagram">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
     </div> 
     )
}

export default SocialMediaIcons
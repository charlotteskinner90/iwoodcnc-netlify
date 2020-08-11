import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
          <li><a href="https://www.facebook.com/Iwoodcnc-103032651310709"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            <li><a href="https://www.instagram.com/iwoodcnc"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a className="smoothscroll" href="#contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>
          <ul className="copyright">
            <li>© Copyright 2020 iwoodCNC</li>
            <li><a href="https://charlotteskinner.dev">Website by charlotteskinner.dev ©</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
  )
}
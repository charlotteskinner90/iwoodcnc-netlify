import React from 'react';

export default function Header() {
  return (
    <header id="home">
      <nav id="nav-wrap" style={{ display: 'flex', justifyContent: 'space-between', height: '62px', backgroundColor: 'white' }}>
        <img className="nav-logo" src="imgs/iwoodbuild.png" alt="iwoodbuild logo" />
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#gallery">Gallery</a></li>
          <li><a className="smoothscroll" href="#services">Services</a></li>
          <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          <li><a className="smoothscroll" href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="row banner"></div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
      </p>
    </header>
  );
}
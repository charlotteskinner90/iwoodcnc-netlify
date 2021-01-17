import React, { useEffect } from 'react';

export default function Testimonials() {
  useEffect(() => {
    if (window.location.host === 'iwoodbuild.co.uk' || window.location.host === 'iwoodbuild-test.netlify.app') {
      window.gtag('config', 'G-Y98RW2Q2MD', { 'page_title': 'testimonials', page_path: window.location.pathname })
    }
  })
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1><span>Client Testimonials</span></h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                <li>
                  <blockquote>
                    <p>
                      “The quality and craftsmanship is really impressive. Fantastic attentive service all round”
                    </p>
                    <cite>Joy Voysey, Hove UK</cite>
                  </blockquote>
                </li>
                <li>
                  <blockquote>
                    <p>
                      “An amazing custom job on my set of bookcase speakers. Slick quality work”
                    </p>
                    <cite>Dominic Duff, Worthing UK</cite>
                  </blockquote>
                </li>
                <li>
                  <blockquote>
                    <p>
                      “Makes perfect use of the space available. Brilliant finishes"
                    </p>
                    <cite>Robert Poffel, Hove UK</cite>
                  </blockquote>
                </li>
                <li>
                  <blockquote>
                    <p>
                      “Excellent service. Really clear, helpful and informative. Will definitely come back”
                    </p>
                    <cite>Scott Daniels, Brighton UK</cite>
                  </blockquote>
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </div>
    </section>
  ) 
}

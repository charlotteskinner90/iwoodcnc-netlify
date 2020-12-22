import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="twelve columns collapsed">
        <h1>About</h1>
          <div className="columns about-item grey">
            <div>
              <p>Based in East Sussex iwoodbuild is a friendly, independent company that provides various woodworking services across several industries.
              </p>
              <ul style={{ paddingLeft: '18px'}}>
                <li>
                  Bespoke Joinery
                </li>
                <li>
                  General Carpentry
                </li>
                <li>
                  Branded Merchandise
                </li>
                <li>
                  Shop & Market Displays
                </li>
                <li>
                  CNC Cutting
                </li>
              </ul>
              <p style={{ marginTop: '30px' }}>
                Iwoodbuild specialises in all work wood related. Whether your commercial or private, we can offer a range of services to suit your wood related needs.
              <br></br>
              <br></br>
                Head over to the gallery to view some of the projects and pieces made for previous clients.
                For more information on what we can offer, please refer to the <a href="#services">services</a> section
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="twelve columns collapsed">
        <h1>About</h1>
          <div className="bgrid-thirds">
            <div className="columns about-item green-blob">
              <div>
                <p>iwoodCNC provides bespoke CNC services from 3D drawings to fully finished assembled
                  projects. Based in Sussex, we are a small, friendly cutting and fitting service offering
                  precision cut parts and finishes at a competitive rate.
                </p>
              </div>
            </div>
            <div className="columns about-item blue-blob">
              <div>
              <p>Services are fit for a variety of business’ and individuals ranging from set designs,
                construction, exhibitions, home furniture, batch products and bespoke one-off custom
                designs. We also cut and produce signage as well as custom branded swag for your
                office or business.
              </p>
              </div>
            </div>
            <div className="columns about-item pink-blob">
              <div>
                <p>Pop over to our gallery page to view some of the projects made for previous clients and
                  follow the contact information on the website if you have a project you wish to CNC. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

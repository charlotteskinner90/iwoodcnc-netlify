import React, { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    if (window.location.host === 'iwoodbuild.co.uk' || window.location.host === 'iwoodbuild-test.netlify.app') {
      window.gtag('config', 'G-Y98RW2Q2MD', { 'page_title': 'services', page_path: window.location.pathname })
    }
  })

  return (
    <section id="services">
      <div className="row">
        <div className="twelve columns collapsed">
          <div className="bgrid-thirds">
            <div className="columns services-item grey">
              <div>
                <h5>Bespoke Joinery</h5>
                <p>
                If your looking for a completely bespoke piece of furniture, custom
tailored to your very own wants and needs, we can help make that wonderful idea a reality.
From contemporary bedside tables to full room 7 metre wardrobes, there is no custom task
too big or small!
                </p>
              </div>
            </div>
            <div className="columns services-item grey">
              <div>
                <h5>General Carpentry</h5>
                <p>
                Decking, Fencing, stud walling and all other carpentry services included.
If you’ve got a job at your home, and it includes wood, we can handle it. 
                </p>
              </div>
            </div>
            <div className="columns services-item grey">
              <div>
                <h5>Branded Merchandise</h5>
                <p>
                iwoodbuild offers a variety of merchandise packages for other
business. Our hospitality and retail packs include custom branded menu holders, coasters,
signs, plinths and other marketing goods for showing off your own business’ branding. 
                </p>
              </div>
            </div>
            
            <div className="columns services-item grey">
              <div>
                <h5>Shop & Market Displays</h5>
                <p>
                From custom branded wooden display stands, shop front signs,
light boxes and other display needs. We can fully design and build shop front displays as well
as market stands to fit your business’ branding and style. 
                </p>
              </div>
            </div>

            <div className="columns services-item services-item-last grey">
              <div>
                <h5>CNC Cutting</h5>
                <p>
                We offer a small CNC cutting service for private and commercial customers.
Our maximum part size is a modest 1150mm x 700mm x 25mm.
We can precisely cust all manner of shapes to a tolerance of +/- 0.15mm, using a range of
carbide cutting bits to achieve fine crisp cuts with maximum repeatability.
3D carving is also available. Using finely tipped 90 degree bits to a maximum depth of 12mm,
custom carvings and text can be a striking effect when custom creating a project. 
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

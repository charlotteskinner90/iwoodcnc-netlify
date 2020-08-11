import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Services</h1>
          <div className="bgrid-halves">
            <div className="columns services-item green-blob">
              <div>
                <h5>BESPOKE JOINERY</h5>
                <p>
                Whether your looking for your parts to be individually sanded/finished or your
                commissioning a one-off custom piece of furniture, we’ve got you covered. Parts are
                finished to an accurate quality control standard and can be delivered to your chosen
                destination, while our custom fitting projects can be accurately measured to your chosen
                space, making the very most of every nook and crevasse.
                </p>
              </div>
            </div>
            <div className="columns services-item lilac-blob">
              <div>
                <h5>LASER CUTTING</h5>
                <p>
                We can also offer a small laser cutting/engraving service. Our maximum part size is
                limited to 290mm x 200mm and is able to cut up to 3mm thickness in acrylics, sheet
                timber and MDF. Our laser cutting service is most commonly used for burning/engraving
                branded content onto parts as well as cutting handy jigs and spacer offsets using acrylic.
                Many of our clients say using custom cut spacers and jigs, particularly when fitting
                units/drawers/components/fittings, saves them hours of hassle on jobs and on personal
                projects.
                </p>
              </div>
            </div>
            <div className="columns services-item pink-blob">
              <div>
                <h5>CAD</h5>
                <p>
                You can start off your CNC project with nothing but a simple sketch and from there we
                work on converting your ideas into vector format. We can then convert your drawings
                into G-Code that can be read and cut by our CNC.
                </p>
                <p>
                For many projects we generate 3D models to help visualise a finished product. Our 3D
                modelling is also offered as a separate service if your particularly interested in having a
                professional 3D drawings demonstrating dimensions and axis.
                </p>
                <p>
                We can also make any necessary adjustments to readily available vector artwork if
                needed.
                </p>
              </div>
            </div>
            
            <div className="columns services-item blue-blob">
              <div>
                <h5>2D and 3D ROUTING</h5>
                <p>
                We can precisely cut all manner of shapes from materials to a tolerance of + - 0.15mm.
                We use a range of carbide cutting bits to achieve fine crisp cut’s with maximum
                repeatability.
                </p>
                <p>
                Our bed size allows us to cut parts up to a maximum size of 1200mm x 700mm as well as
                parts as small as 30mm x 30mm. We can use carbide cutters as small as 2mm allowing a
                1mm rad for all internal corners.
                </p>
                <p>
                We specialise in 2D routing timber and many other hardwoods cutting and creating
                kitchen cupboard fronts to small batch items. We are also able to nest your parts in the
                most efficient way available to our bed size in order to maximise the usage of material
                and keep the costs down.
                </p>
                <p>
                We can also 3D carve designs and text directly onto your parts/projects using finely
                tipped 90degree cutters up to a depth of 12mm.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

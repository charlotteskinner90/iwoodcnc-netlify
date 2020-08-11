import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export default function Materials() {
  return (
    <section id="materials">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Materials</h1>
          <div className="accordion-container">
            <button className="accordion-materials pale-lilac">
              Metals
              <FontAwesomeIcon style={{ marginTop: '10px', color: '444444'}} icon={faAngleDoubleDown} />
            </button>
            <div className="panel">
              <p>
                We stock a wide range of specialist metal cutting bits that are capable of delivering accurate and repeatable finishes. We can cut metals up to a thickness of 6mm. Sheet metals are commonly used for signage, home décor and other smaller decorative items/finishes. We can cut a range of non-ferrous metals that include the following:
              </p>
              <div className="panel-list">
                <ul>
                  <li>
                    Aluminium
                  </li>
                  <li>
                    Copper
                  </li>
                  <li>
                    Brass
                  </li>
                </ul>
              </div>
            </div>

            <button className="accordion-materials pale-green">
              Hardwoods
              <FontAwesomeIcon style={{ marginTop: '10px', color: '444444'}} icon={faAngleDoubleDown} />
            </button>
            <div className="panel">
                <p>
                  Cutting hardwoods is what were best known for. We adjust all of our cutting parameters to achieve 
                  the cleanest sharpest edges for a variety of wood types and densities. Our hardwood selection is as follows:
                </p>
                <div className="panel-list">
                  <ul>
                    <li>
                      White Oak
                    </li>
                    <li>
                      European Oak
                    </li>
                    <li>
                      White Beech
                    </li>
                    <li>
                      Steamed Beech
                    </li>
                    <li>
                      Poplar/Tulipwood
                    </li>
                    <li>
                      Canadian Hard Maple
                    </li>
                    <li>
                      American Walnut
                    </li>
                    <li>
                      Meranti
                    </li>
                    <li>
                      Douglas Fir
                    </li>
                    <li>
                      American Cherry
                    </li>
                  </ul>
                </div>
            </div>
            <button className="accordion-materials pale-pink">
              Sheet Materials
              <FontAwesomeIcon style={{ marginTop: '10px', color: '444444'}} icon={faAngleDoubleDown} />
            </button>
            <div className="panel">
                <p>
                Our machinery is capable of cutting parts to a maximum size of 1200mm x 700mm x
                27mm (In some cases however we have been able to cut up to a thickness of 40mm) We
                commonly cut sheet materials for both commercial and personal clientele over a wide
                range of applications. Our state of the art compression cutters ensure that your parts are
                crisp and accurate. Our range of Sheet materials is listed as follows:
                </p>
                <div className="panel-list">
                <ul>
                  <li>
                    MDF (Regular/Moisture Resistant)
                  </li>
                  <li>
                    Plywood (Birch, Spruce, Marine)
                  </li>
                  <li>
                    Acrylics (Cast, Extruded)
                  </li>
                  <li>
                    High Density Foam
                  </li>
                </ul>
              </div>
              <p>
                We also have a variety of coloured and metal faced veneers of which we can press onto a number of our
                sheet materials. Please enquire for more details regarding specific colours and finishes.
              </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}
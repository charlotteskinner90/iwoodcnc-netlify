/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './styles.css';


const styles = {
  container: {
    paddingTop: '45px',
    borderRadius: '10px',
  }
}

const params = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
}

const chairImages = [
  "chair/chair1.jpg",
  "chair/chair2.jpg",
  "chair/chair3.jpg"
]

const cornerImages = [
  "corner/corner1.jpg",
  "corner/corner2.jpg"
]

const tableImages = [
  "coffeeTable/table1.jpg",
  "coffeeTable/table2.jpg",
  "coffeeTable/table3.jpg"
]

const shelvingImages = [
  "shelving/shelving1.jpeg",
  "shelving/shelving2.jpeg"
]

const alcoveImages = [
  "alcove/alcove1.jpeg",
  "alcove/alcove2.jpeg"
]

const sideCupboardImages = [
  "sideCupboards/sideCupboards1.jpeg",
  "sideCupboards/sideCupboards2.jpeg"
]

const musetteImages = [
  "musette/musette1.jpeg",
  "musette/musette2.jpeg",
  "musette/musette3.jpg",
  "musette/musette4.jpg",
  "musette/musette5.jpg",
  "musette/musette6.jpg",
  "musette/musette7.jpg",
  "musette/musette8.jpg"
]

const plaqueImages = [
  "plaque/plaque1.jpg",
  "plaque/plaque2.jpeg",
  "plaque/plaque3.jpeg"
]

const customUnitImages = [
  "customUnit/customUnit1.jpg",
  "customUnit/customUnit2.jpg",
  "customUnit/customUnit3.jpg",
  "customUnit/customUnit4.jpg",
  "customUnit/customUnit5.jpg",
  "customUnit/customUnit6.jpg",
]

const customDeskImages = [
  "customDesk/customDesk1.jpg",
  "customDesk/customDesk2.jpg",
  "customDesk/customDesk3.jpg",
  "customDesk/customDesk4.jpg",
  "customDesk/customDesk5.jpg",
]

const wardrobeImages = [
  "wardrobe/wardrobe1.jpg",
  "wardrobe/wardrobe2.jpg",
  "wardrobe/wardrobe3.jpg",
  "wardrobe/wardrobe4.jpg",
]

const musicImages = [
  "musicPlaque/music1.jpg",
  "musicPlaque/music2.jpg"
]

const fenceImages = [
  "fence/fence1.jpg",
  "fence/fence2.jpg"
]

const rickImages = [
  "rick/rick1.jpg",
  "rick/rick2.jpg"
]

// const iwoodcncImages = [
//   "iwoodcnc/iwoodcnc1.jpg",
//   "iwoodcnc/iwoodcnc2.jpg"
// ]

const pocketImages = [
  "pocket/pocket1.jpg",
  "pocket/pocket2.jpg"
]

export default function Gallery() {
  const [openFirst, setOpenFirst] = useState(false)
  const [openSecond, setOpenSecond] = useState(false)
  const [openThird, setOpenThird] = useState(false)
  const [openFourth, setOpenFourth] = useState(false)
  const [openFifth, setOpenFifth] = useState(false)
  const [openSix, setOpenSix] = useState(false)
  const [openSeven, setOpenSeven] = useState(false)
  const [openEight, setOpenEight] = useState(false)
  const [openNine, setOpenNine] = useState(false)
  const [openTen, setOpenTen] = useState(false)
  const [openEleven, setOpenEleven] = useState(false)
  const [openTwelve, setOpenTwelve] = useState(false)
  const [openThirteen, setOpenThirteen] = useState(false)
  // const [openFourteen, setOpenFourteen] = useState(false)
  const [openFifteen, setOpenFifteen] = useState(false)
  const [openSixteen, setOpenSixteen] = useState(false)


  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">

          {/* <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenFourteen(true)}>
                  <img src={`imgs/${iwoodcncImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      Here we have our custom made
                      “iwoodcnc” advertisement sign
                      board.
                      <br></br>
                      <br></br>
                      Pocketed lettering with a navy blue
                      fill. All finished with several coats of
                      hard wearing varnish, making it easy
                      to clean and long lasting. 
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openFourteen} onClose={() => setOpenFourteen(false)} center>
                  <Swiper {...params}>
                  {iwoodcncImages.map((iwoodcnc, index) => (
                    <img key={`corner_${index}`} src={`imgs/${iwoodcnc}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  Here we have our custom made
                  “iwoodcnc” advertisement sign
                  board. 
                  <br></br>
                  <br></br>
                  Pocketed lettering with a navy blue
                  fill. All finished with several coats of
                  hard wearing varnish, making it easy
                  to clean and long lasting. 
                  </h6>
                </Modal>
              </div>
            </div> */}

        
<div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenSecond(true)}>
                  <img src={`imgs/${chairImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      This lovely little piano stool was made as a replica
                      replacement for a client to complete their loft space.
                      this piece is made from various thicknesses of birch
                      plywood (grade BB/BB) finished with a wonderful art
                      deco style fabric for the seat.
                      CNC cut parts, hand assembled and hand finished for a
                      precise and quality finish.
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openSecond} onClose={() => setOpenSecond(false)} center>
                  <Swiper {...params}>
                  {chairImages.map((chair, index) => (
                    <img key={`chair_${index}`} src={`imgs/${chair}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  This lovely little piano stool was made as a replica
                  replacement for a client to complete their loft space.
                  this piece is made from various thicknesses of birch
                  plywood (grade BB/BB) finished with a wonderful art
                  deco style fabric for the seat.
                  CNC cut parts, hand assembled and hand finished for a
                  precise and quality finish.
                  </h6>
                </Modal>
              </div>
            </div>

          <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenThirteen(true)}>
                  <img src={`imgs/${rickImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      Here we have a custom carved “Rick
                      and Morty” plaque from the adult
                      swim hit TV series. Custom V carved
                      text from solid white American oak
                      wood. Stunning natural grain
                      qualities with precision detail. 
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openThirteen} onClose={() => setOpenThirteen(false)} center>
                  <Swiper {...params}>
                  {rickImages.map((rick, index) => (
                    <img key={`corner_${index}`} src={`imgs/${rick}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                    Here we have a custom carved “Rick
                    and Morty” plaque from the adult
                    swim hit TV series. Custom V carved
                    text from solid white American oak
                    wood. Stunning natural grain
                    qualities with precision detail. 
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenFifteen(true)}>
                  <img src={`imgs/${fenceImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      One of our home visit projects
                      includes this charming little white
                      picket fence.
                      <br></br>
                      <br></br>
                      CNC cut parts for lovely uniform
                      pickets with clean rounded tops.
                      This pretty little fence has caused
                      quite a positive stir in the area,
                      being the first of it’s kind on the
                      road in question.
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openFifteen} onClose={() => setOpenFifteen(false)} center>
                  <Swiper {...params}>
                  {fenceImages.map((fence, index) => (
                    <img key={`corner_${index}`} src={`imgs/${fence}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                    One of our home visit projects
                    includes this charming little white
                    picket fence.
                    <br></br>
                    <br></br>
                    CNC cut parts for lovely uniform
                    pickets with clean rounded tops.
                    This pretty little fence has caused
                    quite a positive stir in the area,
                    being the first of it’s kind on the
                    road in question.
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenFirst(true)}>
                  <img src={`imgs/${tableImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      This custom coffee table was made entirely out of 18mm
                      birch plywood (grade BB/BB)
                      A beautiful simple piece finished with 3 coats of
                      polyurethane varnish for a tough and wipeable surface,
                      while bringing colour to the natural grains in the wood
                      CNC cut parts for precise and accurate fit. Hand assembled
                      and hand finished. 
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openFirst} onClose={() => setOpenFirst(false)} center>
                  <Swiper {...params}>
                  {tableImages.map((table, index) => (
                    <img key={`table_${index}`} src={`imgs/${table}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  This custom coffee table was made entirely out of 18mm
                  birch plywood (grade BB/BB)
                  A beautiful simple piece finished with 3 coats of
                  polyurethane varnish for a tough and wipeable surface,
                  while bringing colour to the natural grains in the wood
                  CNC cut parts for precise and accurate fit. Hand assembled
                  and hand finished. 
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenSixteen(true)}>
                  <img src={`imgs/${pocketImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      A close up example of some pocket
                      lettering for a custom cut sign.
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openSixteen} onClose={() => setOpenSixteen(false)} center>
                  <Swiper {...params}>
                  {pocketImages.map((pocket, index) => (
                    <img key={`corner_${index}`} src={`imgs/${pocket}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  A close up example of some pocket
                  lettering for a custom cut sign.  
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenNine(true)}>
                  <img src={`imgs/${customUnitImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >This wonderful piece of custom furniture was made
                      for a client who wanted particular sized
                      compartments and shelves to fit small parts in.
                      This unit was a compete custom build, with
                      coloured laminated fronts, making them easy to
                      clean and wipe down.
                      CNC cut parts for precise and accurate fit. Hand
                      assembled and hand finished.
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openNine} onClose={() => setOpenNine(false)} center>
                  <Swiper {...params}>
                  {customUnitImages.map((customUnit, index) => (
                    <img key={`corner_${index}`} src={`imgs/${customUnit}`} />
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  This wonderful piece of custom furniture was made
                  for a client who wanted particular sized
                  compartments and shelves to fit small parts in.
                  This unit was a compete custom build, with
                  coloured laminated fronts, making them easy to
                  clean and wipe down.
                  CNC cut parts for precise and accurate fit. Hand
                  assembled and hand finished. 
                  </h6>
                </Modal>
              </div>
            </div>


            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenThird(true)}>
                  <img src={`imgs/${cornerImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      This corner unit was made using 18mm birch
                      plywood (grade BB/BB)
                      Designed to fit particularly in the space
                      behind the door. Finished in tough quality
                      varnish, giving it a strong water resistant
                      surface.
                      CNC cut parts for precise and accurate fit.
                      Hand assembled and hand finished. 
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openThird} onClose={() => setOpenThird(false)} center>
                  <Swiper {...params}>
                  {cornerImages.map((corner, index) => (
                    <img key={`corner_${index}`} src={`imgs/${corner}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  This corner unit was made using 18mm birch
                  plywood (grade BB/BB)
                  Designed to fit particularly in the space
                  behind the door. Finished in tough quality
                  varnish, giving it a strong water resistant
                  surface.
                  CNC cut parts for precise and accurate fit.
                  Hand assembled and hand finished. 
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenFourth(true)}>
                  <img src={`imgs/${shelvingImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      These Kitchen Shelves we’re designed and fitted
                      precisely for purpose to accommodate the various
                      sized containers. Making great use of an otherwise
                      wasted space. Finished in a wonderful dove grey
                      to blend in with the surrounding wall.
                      CNC cut parts for precise and accurate fit. Hand
                      assembled and hand finished. 
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openFourth} onClose={() => setOpenFourth(false)} center>
                  <Swiper {...params}>
                  {shelvingImages.map((shelving, index) => (
                    <img key={`corner_${index}`} src={`imgs/${shelving}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  These Kitchen Shelves we’re designed and fitted
                  precisely for purpose to accommodate the various
                  sized containers. Making great use of an otherwise
                  wasted space. Finished in a wonderful dove grey
                  to blend in with the surrounding wall.
                  CNC cut parts for precise and accurate fit. Hand
                  assembled and hand finished. 
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenFifth(true)}>
                  <img src={`imgs/${alcoveImages[1]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >Here we have 2 large cabinet units Complete with
                        5 floating shelves to make the most of space. All
                        finished in satin white for a bright and clean look.
                        CNC cut parts for precise and accurate fit. Hand
                        assembled and hand finished.
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openFifth} onClose={() => setOpenFifth(false)} center>
                  <Swiper {...params}>
                  {alcoveImages.map((alcove, index) => (
                    <img key={`corner_${index}`} src={`imgs/${alcove}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                    Here we have 2 large cabinet units Complete with
                    5 floating shelves to make the most of space. All
                    finished in satin white for a bright and clean look.
                    CNC cut parts for precise and accurate fit. Hand
                    assembled and hand finished.
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenSix(true)}>
                  <img src={`imgs/${sideCupboardImages[1]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      This beautiful set of bedside drawers was a custom
                      project for a client to fit the contemporary style
                      they were after. Finished in a satin white, featuring
                      Solid oak tops for a strong durable finish.
                      CNC cut parts for precise and accurate fit. Hand
                      assembled and hand finished. 
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openSix} onClose={() => setOpenSix(false)} center>
                  <Swiper {...params}>
                  {sideCupboardImages.map((sideCupboard, index) => (
                    <img key={`corner_${index}`} src={`imgs/${sideCupboard}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  This beautiful set of bedside drawers was a custom
                  project for a client to fit the contemporary style
                  they were after. Finished in a satin white, featuring
                  Solid oak tops for a strong durable finish.
                  CNC cut parts for precise and accurate fit. Hand
                  assembled and hand finished. 
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenSeven(true)}>
                  <img src={`imgs/${musetteImages[1]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >These custom branded coasters and keyrings are
                      made using European oak, laser etched with their
                      chosen design and finished with a high quality
                      polyurethane varnish for a tough and durable finish.
                      CNC cut and hand finished for precision accuracy and
                      a quality finish.</p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openSeven} onClose={() => setOpenSeven(false)} center>
                  <Swiper {...params}>
                  {musetteImages.map((musette, index) => (
                    <img key={`corner_${index}`} src={`imgs/${musette}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  These custom branded coasters and keyrings are
                  made using European oak, laser etched with their
                  chosen design and finished with a high quality
                  polyurethane varnish for a tough and durable finish.
                  CNC cut and hand finished for precision accuracy and
                  a quality finish.
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenEight(true)}>
                  <img src={`imgs/${plaqueImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      These beautiful custom plaques have been made
                      using white European oak, banded with black
                      American walnut. The faces have been pocketed and
                      fitted with engraved brass plates.
                      These custom engraved plaques feature 4 flush high
                      strength magnets, allowing you to stick the plaque to
                      a fridge or another magnetic friendly surface.
                      CNC cut and hand finished for precision accuracy and
                      a quality finish.
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openEight} onClose={() => setOpenEight(false)} center>
                  <Swiper {...params}>
                  {plaqueImages.map((plaque, index) => (
                    <img key={`corner_${index}`} src={`imgs/${plaque}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  These beautiful custom plaques have been made
                  using white European oak, banded with black
                  American walnut. The faces have been pocketed and
                  fitted with engraved brass plates.
                  These custom engraved plaques feature 4 flush high
                  strength magnets, allowing you to stick the plaque to
                  a fridge or another magnetic friendly surface.
                  CNC cut and hand finished for precision accuracy and
                  a quality finish.
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenTen(true)}>
                  <img src={`imgs/${customDeskImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      Here we have a custom made desk for a client
                      particularly keen on the look and texture of birch
                      plywood (grade BB/BB)
                      A simple, yet elegant design featuring 3 large
                      drawers perfect for A4 sized documents. Finished in
                      three coats of strong durable varnish
                      CNC cut parts for precision accuracy. Hand
                      assembled and hand finished to a quality standard
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openTen} onClose={() => setOpenTen(false)} center>
                  <Swiper {...params}>
                  {customDeskImages.map((customDesk, index) => (
                    <img key={`corner_${index}`} src={`imgs/${customDesk}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  Here we have a custom made desk for a client
                  particularly keen on the look and texture of birch
                  plywood (grade BB/BB)
                  A simple, yet elegant design featuring 3 large
                  drawers perfect for A4 sized documents. Finished in
                  three coats of strong durable varnish
                  CNC cut parts for precision accuracy. Hand
                  assembled and hand finished to a quality standard
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenEleven(true)}>
                  <img src={`imgs/${wardrobeImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      This beautiful 7 metre x 2 metre wardrobe was a
                      complete custom build. Complete with 23 drawers, 6
                      clothes rails, 4 shelves and 13 shoe compartments.
                      This piece makes use of every ounce of space while
                      hiding everything neatly and cleanly behind a wall of
                      18mm birch plywood (grade BB/BB)
                      All parts are CNC cut for precision accuracy. All hand
                      assembled and hand finished. 
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openEleven} onClose={() => setOpenEleven(false)} center>
                  <Swiper {...params}>
                  {wardrobeImages.map((wardrobe, index) => (
                    <img key={`corner_${index}`} src={`imgs/${wardrobe}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  This beautiful 7 metre x 2 metre wardrobe was a
                  complete custom build. Complete with 23 drawers, 6
                  clothes rails, 4 shelves and 13 shoe compartments.
                  This piece makes use of every ounce of space while
                  hiding everything neatly and cleanly behind a wall of
                  18mm birch plywood (grade BB/BB)
                  All parts are CNC cut for precision accuracy. All hand
                  assembled and hand finished. 
                  </h6>
                </Modal>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="overlay-item">
                <a onClick={() => setOpenTwelve(true)}>
                  <img src={`imgs/${musicImages[0]}`} className="item-img"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <p style={{ color: '#ffffff' }} >
                      This custom piece is a v carving into a
                      piece of solid European oak, finished with
                      a black walnut trim and Danish oil for a
                      natural matte look.
                      CNC cut parts for precise and accurate fit.
                      Hand assembled and hand finished. 
                      </p>
                    </div>
                  </div>
                </a>
                <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openTwelve} onClose={() => setOpenTwelve(false)} center>
                  <Swiper {...params}>
                  {musicImages.map((music, index) => (
                    <img key={`corner_${index}`} src={`imgs/${music}`} className="item-img img-small"/>
                  ))}
                  </Swiper>
                  <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  This custom piece is a v carving into a
                  piece of solid European oak, finished with
                  a black walnut trim and Danish oil for a
                  natural matte look.
                  CNC cut parts for precise and accurate fit.
                  Hand assembled and hand finished.   
                  </h6>
                </Modal>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
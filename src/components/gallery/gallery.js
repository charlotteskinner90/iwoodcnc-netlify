/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Modal from 'react-responsive-modal';
import _sortBy from 'lodash/sortBy'
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

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       openModal: false,
       activeItemName: '',
       activeItemId: null,
       activeItemImages: [],
       activeItemDescription: '',
    }
  }

  componentDidMount() {
    if (window.location.host === 'iwoodbuild.co.uk' || window.location.host === 'iwoodbuild-test.netlify.app') {
      window.gtag('config', 'G-Y98RW2Q2MD', { 'page_title': 'gallery', page_path: window.location.pathname })
    }
  }

  openModalWithItem(item) {
    this.setState({
       openModal: true,
       activeItemName: item.name,
       activeItemId: item.name,
       activeItemImages: item.galleryImages,
       activeItemDescription: item.overlay,
    })
    window.gtag('config', 'G-Y98RW2Q2MD', { 'page_title': `open gallery ${item.name}`, page_path: item.name })
  }

  closeModal() {
    this.setState({
      openModal: false,
      activeItemName: '',
      activeItemId: null,
      activeItemImages: [],
      activeItemDescription: '',
    })
  }

  render() {
    const { galleryImages } = this.props;
    const sortedImages = _sortBy(galleryImages, ['date']).reverse()

    return (
      <section id="gallery">
        <div className="row">
          <div className="twelve columns collapsed">
            <div id="gallery-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {sortedImages && sortedImages.map(item => (
                <div key={item.name} className="columns gallery-item">
                  <div className="overlay-item">
                    <a onClick={() => this.openModalWithItem(item)}>
                      <img src={item.coverImage} className="item-img" alt={item.title} />
                      <div className="overlay">
                        <div className="gallery-item-meta">
                          <p style={{ color: '#ffffff' }} >{item.overlay}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              <Modal key={this.state.activeItemId} styles={{ modal: styles.container}} closeIconSize={20} open={this.state.openModal} onClose={() => this.closeModal()} center>
                <Swiper {...params}>
                {this.state && this.state.activeItemImages.map((image, index) => (
                  <img key={`corner_${index}`} src={image} className="item-img img-small" alt="gallery images" />
                ))}
                </Swiper>
                <h6 style={{ textAlign: 'center', marginTop: '20px'}}>
                  {this.state.activeItemDescription}
                </h6>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery;
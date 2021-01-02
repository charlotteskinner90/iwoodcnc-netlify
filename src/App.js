import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Gallery from './components/gallery/gallery';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import { ToastContainer } from 'react-toastify';
import data from './data.json'


class App extends Component {
  state = {
    data
  }

  getDocuments = collection => this.state.data[collection] || []
  

  render() {
    const galleryImages = this.getDocuments('gallery');

    return (
      <div className="App">
        <ToastContainer newestOnTop />
        <Header />
        <About />
        <Gallery galleryImages={galleryImages} />
        <Testimonials />
        <Services />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App

import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import Recaptcha from "react-recaptcha";
import { showToastBL } from './toasts';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { subject: '', message: '', name: '', email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
  }

  componentDidMount() {
    if (window.location.host === 'iwoodbuild.co.uk' || window.location.host === 'iwoodbuild-test.netlify.app') {
      window.gtag('config', 'G-Y98RW2Q2MD', { 'page_title': 'contact', page_path: window.location.pathname })
    }
  }
  handleChange(param, event) {
    this.setState({ [param]: event.target.value})
  }

  recaptchaLoaded() {
    console.log('captcha successfully loaded')
  }

  resetForm() {
    this.setState({
      subject: '', message: '', name: '', email: ''
    })
  }
  
  sendMail(contactForm) {
    const { name, email, subject, message } = this.state
    const templateParams = {
      "from_name": name,
      "from_email": email,
      "from_subject": subject,
      "project_request": message,
    };
    
    emailjs.send('service_63pyyb3','iwoodbuild_email', templateParams, 'user_w7uSna8iiGdffPqJhR5PD')
      .then((response) => {
        showToastBL("Thank you for your enquiry. We will be in touch soon.");
        this.resetForm()
      }, (err) => {
        showToastBL("Oops! Something isn't right, please try sending again.");
      });
  }

  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <h1 style={{ color: '#ffffff', marginBottom: '15px' }}>Get In Touch.</h1>
            <h5 style={{ color : '#ffffff', textAlign: 'justify'}}>Due to the nature of our workspace it’s usually best to contact us directly through the website.</h5>
            <h5 style={{ color : '#ffffff'}}>We usually respond to enquiries within 1 working day.</h5>
          </div>
          <div className="row">
            <div className="eight columns">
              <Formik
                initialValues={this.state}
                onSubmit={async () => {
                  await this.sendMail()
                }}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
                    <fieldset>
                      <div>
                        <label htmlFor="name">Name <span className="required">*</span></label>
                        <input type="text" size={35} id="name" name="name" required onChange={this.handleChange.bind(this, 'name')} value={this.state.name} />
                      </div>
                      <div>
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="text" size={35} id="email" name="email" required onChange={this.handleChange.bind(this, 'email')} value={this.state.email} />
                      </div>
                      <div>
                        <label htmlFor="subject">Subject <span className="required">*</span></label>
                        <input type="text" size={35} id="subject" name="subject" required onChange={this.handleChange.bind(this, 'subject')} value={this.state.subject} />
                      </div>
                      <div>
                        <label htmlFor="message">Message <span className="required">*</span></label>
                        <textarea cols={50} rows={15} id="message" name="message" required onChange={this.handleChange.bind(this, 'message')} value={this.state.message} />
                      </div>
                      <div className="recaptcha-container">
                        <Recaptcha
                          sitekey="6LflFBkaAAAAAOMc16QO0TOKhOtcliisy7fKyvpn"
                          render="explicit"
                          onloadCallback={this.recaptchaLoaded}
                          className="g-recaptcha"
                        />
                        <button type="submit" className="submit">Submit</button>
                        <span id="image-loader">
                          <img alt="" src="images/loader.gif" />
                        </span>
                      </div>
                    </fieldset>
                  </form>
                )}
              </Formik>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4><strong>Address</strong></h4>
                <p className="address">
                  Unit 8, Upper Stoneham Farm, Lewes, BN8 5RH <br />
                  iwoodbuild@outlook.com<br />
                  07772409770<br />
                </p>
              </div>
            </aside>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
import React,{useRef} from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("oNB9X1jFw-gRAbkMG");

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7dcp6p', 'template_8ne0t9h', form.current, 'oNB9X1jFw-gRAbkMG')
      
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your mail sent sucessfully")
      e.target.reset();
  };
            return (
            <>
            <div className="bg">
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
         
          <p>Contact Us</p>
        </div>
      </div>

      <div data-aos="fade-up">      </div>

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4 style={{color:"white"}}>Location:</h4>
                <h5 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;A108 Adam Street,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New York,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NY 535022</h5>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4 style={{color:"white"}}>Email:</h4>
                <h5 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;info@digimail.com</h5>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4 style={{color:"white"}}>Call:</h4>
                <h5 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;+1 5589 55488 555</h5>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form ref={form}onSubmit={sendEmail} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3  mt-md-0">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3 mt-md-0">
                <textarea className="form-control" name="message" rows="8" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" value="send" style={{color:"black"}}>Send Mail</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    </div>
    <Footer/>

            </>
            );
}

export default Contact;
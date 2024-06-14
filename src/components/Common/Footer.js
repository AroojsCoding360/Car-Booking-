import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>CARBOOK</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="footer-social">
              <a href="/"><i className="fab fa-facebook-f"></i></a>
              <a href="/"><i className="fab fa-twitter"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
            </div>
          <div className="col-md-4">
            <h5>Information</h5>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Terms and Conditions</a></li>
              <li><a href="/">Best Price Guarantee</a></li>
              <li><a href="/">Privacy & Cookie Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Customer Support</h5>
            <ul>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Payment Option</a></li>
              <li><a href="/">Booking Tips</a></li>
              <li><a href="/">How It Works</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 All rights reserved | This template is made with <i className="fa fa-heart"></i> by Colorlib</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;

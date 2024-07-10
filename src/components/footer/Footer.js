import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
     <footer class="main-footer text-center">
      
        <div class="widgets-section padding-top-small padding-bottom-small">
            <div class="container">

                <div class="row clearfix">
                   
                    <div class="footer-column col-md-4 col-sm-6 col-xs-12">
                        <div class="footer-widget about-widget">
                            <h3 class="has-line-center">About Us</h3>
                            <div class="widget-content">
                                <div class="text">Welcome to Text Extractor
                               At Text Extractor, we are passionate about harnessing
                               the power of technology to simplify your life. Our team
                               of dedicated developers has crafted an innovative
                               solution that empowers users to effortlessly
                               extract text from images using cutting-edge image
                               recognition technology. </div>
                                <ul class="social-links">
                                    <li><a href="#"><span class="fa-brands fa-facebook"></span></a></li>
                                    <li><a href="#"><span class="fa-brands fa-x-twitter"></span></a></li>
                                    <li><a href="#"><span class="fa-brands fa-google-plus-g"></span></a></li>
                                    <li><a href="#"><span class="fa-brands fa-linkedin"></span></a></li>
                                    <li><a href="#"><span class="fa-brands fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div class="footer-column col-md-4 col-sm-6 col-xs-12">
                        <div class="footer-widget contact-widget">
                            <h3 class="has-line-center">Contact Us</h3>
                            <div class="widget-content">
                                <ul class="contact-info">
                                    <li>
                                        <div class="icon"><span class="flaticon-support"></span></div>
                                    </li>
                                    <li>TextExtractor</li>
                                    {/* <li>+91 </li> */}
                                    <li>text.extractor8@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div class="footer-column col-md-4 col-sm-12 col-xs-12">
                        <div class="footer-widget newsletter-widget">
                            <h3 class="has-line-center">Privacy & Policy</h3>
                            <div class="widget-content">
                                <div class="text"> Welcome to Text Extractor This Privacy Policy governs the manner in which [Text Extractor] collects, uses, maintains, and discloses information collected from users of the [Text Extractor] Web application.</div>
                                
                            </div>
                        </div>
                    </div>
                

                </div>
            </div>
        </div>

        
        <div class="footer-bottom">
            <div class="auto-container">
                <div class="copyright-text">Copyright ©. All Rights Reserved</div>
            </div>
        </div>
    </footer></>
  )
}

export default Footer
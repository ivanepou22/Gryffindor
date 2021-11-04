import React from 'react'
import './Footer.css'
import footerLogo from '../assets/images/logo.svg'
import creditCards from '../assets/images/footer/credit-cards-footer.png'

function Footer() {
    return (
        <>
            {/* <!-- Start Footer Area --> */}
            <footer className="footer">
                {/* <!-- Start Footer Top --> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="footer-logo">
                                        <a href="/">
                                            <img src={footerLogo} alt="#" className="footer-image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8 col-12">
                                    <div className="footer-newsletter">
                                        <h4 className="title">
                                            Subscribe to our Newsletter
                                            <span
                                            >Get all the latest information, Sales and Offers.</span
                                            >
                                        </h4>
                                        <div className="newsletter-form-head">
                                            <form
                                                action="#"
                                                method="get"
                                                target="_blank"
                                                className="newsletter-form"
                                            >
                                                <input
                                                    name="EMAIL"
                                                    placeholder="Email address here..."
                                                    type="email"
                                                />
                                                <div className="button">
                                                    <button className="btn">
                                                        Subscribe<span className="dir-part"></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Top --> */}
                {/* <!-- Start Footer Middle --> */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div className="single-footer f-contact">
                                        <h3>Get In Touch With Us</h3>
                                        <p className="phone">Phone: +256 700485821</p>
                                        <ul>
                                            <li><span>Monday-Friday: </span> 9.00 am - 8.00 pm</li>
                                            <li><span>Saturday: </span> 09.00 am - 6.00 pm</li>
                                        </ul>
                                        <p className="mail">
                                            <a href="mailto:admin@gryffindor.com"
                                            >admin@gryffindor.com</a
                                            >
                                        </p>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div className="single-footer our-app">
                                        <h3>Our Mobile App</h3>
                                        <ul className="app-btn">
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-apple"></i>
                                                    <span className="small-title">Download on the</span>
                                                    <span className="big-title">App Store</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-play-store"></i>
                                                    <span className="small-title">Download on the</span>
                                                    <span className="big-title">Google Play</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div className="single-footer f-link">
                                        <h3>Information</h3>
                                        <ul>
                                            <li><a href="/">About Us</a></li>
                                            <li><a href="/">Contact Us</a></li>
                                            <li><a href="/">Downloads</a></li>
                                            <li><a href="/">Sitemap</a></li>
                                            <li><a href="/">FAQs Page</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div className="single-footer f-link">
                                        <h3>Shop Departments</h3>
                                        <ul>
                                            <li>
                                                <a href="/">Computers & Accessories</a>
                                            </li>
                                            <li>
                                                <a href="/">Smartphones & Tablets</a>
                                            </li>
                                            <li><a href="/">TV, Video & Audio</a></li>
                                            <li>
                                                <a href="/">Cameras, Photo & Video</a>
                                            </li>
                                            <li><a href="/">Headphones</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Middle --> */}
                {/* <!-- Start Footer Bottom --> */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-12">
                                    <div className="payment-gateway">
                                        <span>We Accept:</span>
                                        <img
                                            src={creditCards}
                                            alt="#"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="copyright">
                                        <p>

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <ul className="socila">
                                        <li>
                                            <span>Follow Us On:</span>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-facebook-filled"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-twitter-original"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-google"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Bottom --> */}
            </footer>
            {/* <!--/ End Footer Area --> */}

            {/* <!-- ========================= scroll-top ========================= --> */}
            <a href="/#" className="scroll-top">
                <i className="lni lni-chevron-up"></i>
            </a>
        </>
    )
}

export default Footer

import React from 'react'
import './Header.css'
import item1 from '../assets/images/header/cart-items/item1.jpg'
import item2 from '../assets/images/header/cart-items/item2.jpg'
import headerLogo from '../assets/images/logo.svg'

function Header() {
    return (
        <>
            {/* <!-- Start Header Area --> */}
            <header className="header navbar-area">
                {/* <!-- Start Topbar --> */}
                <div className="topbar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-left">
                                    <ul className="menu-top-link">
                                        <li>
                                            <div className="select-position">
                                                <select id="select4">
                                                    <option value="0" selected>UGX UGSHS</option>
                                                    <option value="0">$ USD</option>
                                                    <option value="1">€ EURO</option>
                                                    <option value="2">$ CAD</option>
                                                    <option value="3">₹ INR</option>
                                                    <option value="4">¥ CNY</option>
                                                    <option value="5">৳ BDT</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="select-position">
                                                <select id="select5">
                                                    <option value="0" selected>English</option>
                                                    <option value="1">Español</option>
                                                    <option value="2">Filipino</option>
                                                    <option value="3">Français</option>
                                                    <option value="4">العربية</option>
                                                    <option value="5">हिन्दी</option>
                                                    <option value="6">বাংলা</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-middle">
                                    <ul className="useful-links">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-end">
                                    <div className="user">
                                        <i className="lni lni-user"></i>
                                        Hello
                                    </div>
                                    <ul className="user-login">
                                        <li>
                                            <a href="/login">Sign In</a>
                                        </li>
                                        <li>
                                            <a href="/register">Register</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Topbar --> */}
                {/* <!-- Start Header Middle --> */}
                <div className="header-middle">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-7">
                                {/* <!-- Start Header Logo --> */}
                                <a className="navbar-brand" href="/">
                                    <img src={headerLogo} alt="Logo" />
                                </a>
                                {/* <!-- End Header Logo --> */}
                            </div>
                            <div className="col-lg-5 col-md-7 d-xs-none">
                                {/* <!-- Start Main Menu Search --> */}
                                <div className="main-menu-search">
                                    {/* <!-- navbar search start --> */}
                                    <div className="navbar-search search-style-5">
                                        <div className="search-select">
                                            <div className="select-position">
                                                <select id="select1">
                                                    <option selected>All</option>
                                                    <option value="1">option 01</option>
                                                    <option value="2">option 02</option>
                                                    <option value="3">option 03</option>
                                                    <option value="4">option 04</option>
                                                    <option value="5">option 05</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="search-input">
                                            <input type="text" placeholder="Search" />
                                        </div>
                                        <div className="search-btn">
                                            <button><i className="lni lni-search-alt"></i></button>
                                        </div>
                                    </div>
                                    {/* <!-- navbar search Ends --> */}
                                </div>
                                {/* <!-- End Main Menu Search --> */}
                            </div>
                            <div className="col-lg-4 col-md-2 col-5">
                                <div className="middle-right-area">
                                    <div className="nav-hotline">
                                        <i className="lni lni-phone"></i>
                                        <h3>Hotline:
                                            <span>(+256) 700 456 789</span>
                                        </h3>
                                    </div>
                                    <div className="navbar-cart">
                                        <div className="wishlist">
                                            <a href="/">
                                                <i className="lni lni-heart"></i>
                                                <span className="total-items">0</span>
                                            </a>
                                        </div>
                                        <div className="cart-items">
                                            <a href="/" className="main-btn">
                                                <i className="lni lni-cart"></i>
                                                <span className="total-items">2</span>
                                            </a>
                                            {/* <!-- Shopping Item --> */}
                                            <div className="shopping-item">
                                                <div className="dropdown-cart-header">
                                                    <span>2 Items</span>
                                                    <a href="/cart">View Cart</a>
                                                </div>
                                                <ul className="shopping-list">
                                                    <li>
                                                        <a href="/" className="remove" title="Remove this item"><i
                                                            className="lni lni-close"></i></a>
                                                        <div className="cart-img-head">
                                                            <a className="cart-img" href="/"><img
                                                                src={item1} alt="#" /></a>
                                                        </div>

                                                        <div className="content">
                                                            <h4><a href="/">
                                                                Apple Watch Series 6</a></h4>
                                                            <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="remove" title="Remove this item"><i
                                                            className="lni lni-close"></i></a>
                                                        <div className="cart-img-head">
                                                            <a className="cart-img" href="/">
                                                                <img src={item2} alt="#" /></a>
                                                        </div>
                                                        <div className="content">
                                                            <h4><a href="/">Wi-Fi Smart Camera</a></h4>
                                                            <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="bottom">
                                                    <div className="total">
                                                        <span>Total</span>
                                                        <span className="total-amount">$134.00</span>
                                                    </div>
                                                    <div className="button">
                                                        <a href="/checkout" className="btn animate">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--/ End Shopping Item --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Header Middle --> */}
                {/* <!-- Start Header Bottom --> */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-6 col-12">
                            <div className="nav-inner">
                                {/* <!-- Start Mega Category Menu --> */}
                                <div className="mega-category-menu">
                                    <span className="cat-button"><i className="lni lni-menu"></i> All Categories</span>
                                    <ul className="sub-category">
                                        <li><a href="/">Electronics <i className="lni lni-chevron-right"></i></a>
                                            <ul className="inner-sub-category">
                                                <li><a href="/">Digital Cameras</a></li>
                                                <li><a href="/">Camcorders</a></li>
                                                <li><a href="/">Camera Drones</a></li>
                                                <li><a href="/">Smart Watches</a></li>
                                                <li><a href="/">Headphones</a></li>
                                                <li><a href="/">MP3 Players</a></li>
                                                <li><a href="/">Microphones</a></li>
                                                <li><a href="/">Chargers</a></li>
                                                <li><a href="/">Batteries</a></li>
                                                <li><a href="/">Cables & Adapters</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/">accessories</a></li>
                                        <li><a href="/">Televisions</a></li>
                                        <li><a href="/">best selling</a></li>
                                        <li><a href="/">top 100 offer</a></li>
                                        <li><a href="/">sunglass</a></li>
                                        <li><a href="/">watch</a></li>
                                        <li><a href="/">man’s product</a></li>
                                        <li><a href="/">Home Audio & Theater</a></li>
                                        <li><a href="/">Computers & Tablets </a></li>
                                        <li><a href="/">Video Games </a></li>
                                        <li><a href="/">Home Appliances </a></li>
                                    </ul>
                                </div>
                                {/* <!-- End Mega Category Menu --> */}
                                {/* <!-- Start Navbar --> */}
                                <nav className="navbar navbar-expand-lg">
                                    <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a href="/" className="active" aria-label="Toggle navigation">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="dd-menu collapsed" href="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Pages</a>
                                                <ul className="sub-menu collapse" id="submenu-1-2">
                                                    <li className="nav-item"><a href="/">About Us</a></li>
                                                    <li className="nav-item"><a href="/">Faq</a></li>
                                                    <li className="nav-item"><a href="/">Login</a></li>
                                                    <li className="nav-item"><a href="/">Register</a></li>
                                                    <li className="nav-item"><a href="/">Mail Success</a></li>
                                                    <li className="nav-item"><a href="/">404 Error</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="dd-menu collapsed" href="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Shop</a>
                                                <ul className="sub-menu collapse" id="submenu-1-3">
                                                    <li className="nav-item"><a href="/">Shop Grid</a></li>
                                                    <li className="nav-item"><a href="/">Shop List</a></li>
                                                    <li className="nav-item"><a href="/">shop Single</a></li>
                                                    <li className="nav-item"><a href="/">Cart</a></li>
                                                    <li className="nav-item"><a href="/">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="dd-menu collapsed" href="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                                                <ul className="sub-menu collapse" id="submenu-1-4">
                                                    <li className="nav-item"><a href="/">Blog Grid Sidebar</a>
                                                    </li>
                                                    <li className="nav-item"><a href="/">Blog Single</a></li>
                                                    <li className="nav-item"><a href="/">Blog Single
                                                        Sibebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/" aria-label="Toggle navigation">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- navbar collapse --> */}
                                </nav>
                                {/* <!-- End Navbar --> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Nav Social --> */}
                            <div className="nav-social">
                                <h5 className="title">Follow Us:</h5>
                                <ul>
                                    <li>
                                        <a href="/"><i className="lni lni-facebook-filled"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="lni lni-twitter-original"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="lni lni-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="lni lni-skype"></i></a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End Nav Social --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Header Bottom --> */}
            </header>
            {/* <!-- End Header Area --> */}
        </>
    )
}

export default Header

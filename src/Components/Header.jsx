import React from 'react'
import './Header.css'
import headerLogo from '../assets/images/logo.svg'
import { useStateValue } from '../Context/StateProvider'
import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart';
import { getBasketTotal } from '../Context/reducer';

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket)
    let totalPrice = 0;
    for (let i = 0; i < basket?.length; i++) {
        totalPrice += (basket[i].price * basket[i].quantity);
    }

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
                                                    <option value="UGX">UGX UGSHS</option>
                                                    <option value="USD">$ USD</option>
                                                    <option value="EURO">€ EURO</option>
                                                    <option value="CAD">$ CAD</option>
                                                    <option value="INR">₹ INR</option>
                                                    <option value="CNY">¥ CNY</option>
                                                    <option value="BDT">৳ BDT</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="select-position">
                                                <select id="select5">
                                                    <option value="0">English</option>
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
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
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
                                            <Link to="/login">Sign In</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Register</Link>
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
                                <Link className="navbar-brand" to="/">
                                    <img src={headerLogo} alt="Logo" />
                                </Link>
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
                                                    <option>All</option>
                                                    <option value="1">Categories</option>
                                                    <option value="2">Products</option>
                                                    <option value="3">Department</option>
                                                    <option value="4">Manufacturers</option>
                                                    <option value="5"> Brands</option>
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
                                            <Link to="/">
                                                <i className="lni lni-heart"></i>
                                                <span className="total-items">0</span>
                                            </Link>
                                        </div>
                                        <div className="cart-items">
                                            <Link to="/" className="main-btn">
                                                <i className="lni lni-cart"></i>
                                                <span className="total-items">{basket?.length}</span>
                                            </Link>
                                            {/* <!-- Shopping Item --> */}
                                            <div className="shopping-item">
                                                <div className="dropdown-cart-header">
                                                    <span>{basket?.length} Item(s)</span>
                                                    <Link to="/cart">View Cart</Link>
                                                </div>
                                                <ul className="shopping-list">
                                                    {
                                                        basket?.length === 0 ? (
                                                            <li>Your Cart is Empty</li>
                                                        ) : (
                                                            basket.map((item, index) => (
                                                                <HeaderCart item={item} key={index} />
                                                            ))
                                                        )

                                                    }
                                                </ul>
                                                <div className="bottom">
                                                    <div className="total">
                                                        <span>Total</span>
                                                        <span className="total-amount">{
                                                            (totalPrice).toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }</span>
                                                    </div>
                                                    <div className="button">
                                                        <Link to="/checkout" className="btn animate">Checkout</Link>
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
                                        <li><Link to="/">Electronics <i className="lni lni-chevron-right"></i></Link>
                                            <ul className="inner-sub-category">
                                                <li><Link to="/">Digital Cameras</Link></li>
                                                <li><Link to="/">Camcorders</Link></li>
                                                <li><Link to="/">Camera Drones</Link></li>
                                                <li><Link to="/">Smart Watches</Link></li>
                                                <li><Link to="/">Headphones</Link></li>
                                                <li><Link to="/">MP3 Players</Link></li>
                                                <li><Link to="/">Microphones</Link></li>
                                                <li><Link to="/">Chargers</Link></li>
                                                <li><Link to="/">Batteries</Link></li>
                                                <li><Link to="/">Cables & Adapters</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/">accessories</Link></li>
                                        <li><Link to="/">Televisions</Link></li>
                                        <li><Link to="/">best selling</Link></li>
                                        <li><Link to="/">top 100 offer</Link></li>
                                        <li><Link to="/">sunglass</Link></li>
                                        <li><Link to="/">watch</Link></li>
                                        <li><Link to="/">man’s product</Link></li>
                                        <li><Link to="/">Home Audio & Theater</Link></li>
                                        <li><Link to="/">Computers & Tablets </Link></li>
                                        <li><Link to="/">Video Games </Link></li>
                                        <li><Link to="/">Home Appliances </Link></li>
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
                                                <Link to="/" className="active" aria-label="Toggle navigation">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Account</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-2">
                                                    <li className="nav-item"><Link to="/">My Account</Link></li>
                                                    <li className="nav-item"><Link to="/">Inbox</Link></li>
                                                    <li className="nav-item"><Link to="/">Orders</Link></li>
                                                    <li className="nav-item"><Link to="/">Credit Details</Link></li>
                                                    <li className="nav-item"><Link to="/">Saved Items</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Shop</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-3">
                                                    <li className="nav-item"><Link to="/products">Products</Link></li>
                                                    <li className="nav-item"><Link to="/wishlist">Wish List</Link></li>
                                                    <li className="nav-item"><Link to="/cart">Cart</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Help</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-4">
                                                    <li className="nav-item"><Link to="/">Help Center</Link></li>
                                                    <li className="nav-item"><Link to="/">Place & Track Order</Link></li>
                                                    <li className="nav-item"><Link to="/">Order Cancellation</Link></li>
                                                    <li className="nav-item"><Link to="/">Payment</Link></li>
                                                    <li className="nav-item"><Link to="/">Returns and Refunds</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" aria-label="Toggle navigation">Contact Us</Link>
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
                                        <Link to="/"><i className="lni lni-facebook-filled"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className="lni lni-twitter-original"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className="lni lni-instagram"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className="lni lni-skype"></i></Link>
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

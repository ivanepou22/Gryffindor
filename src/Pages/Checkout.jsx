import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">checkout</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="/">Shop</a></li>
                                <li>checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="checkout-wrapper section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="checkout-steps-form-style-1">
                                <ul id="accordionExample">
                                    <li>
                                        <h6 className="title" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree">Your Personal Details </h6>
                                        <section className="checkout-steps-form-content collapse show" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="single-form form-default">
                                                        <label>User Name</label>
                                                        <div className="row">
                                                            <div className="col-md-6 form-input form">
                                                                <input type="text" placeholder="First Name" />
                                                            </div>
                                                            <div className="col-md-6 form-input form">
                                                                <input type="text" placeholder="Last Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Email Address</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Email Address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Phone Number</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-form form-default">
                                                        <label>Mailing Address</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Mailing Address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>City</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="City" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Post Code</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Post Code" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Country</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Country" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Region/State</label>
                                                        <div className="select-items">
                                                            <select className="form-control">
                                                                <option value="0">select</option>
                                                                <option value="1">select option 01</option>
                                                                <option value="2">select option 02</option>
                                                                <option value="3">select option 03</option>
                                                                <option value="4">select option 04</option>
                                                                <option value="5">select option 05</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-checkbox checkbox-style-3">
                                                        <input type="checkbox" id="checkbox-3" />
                                                        <label for="checkbox-3"><span></span></label>
                                                        <p>My delivery and mailing addresses are the same.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout-sidebar">
                                <div className="checkout-sidebar-coupon">
                                    <p>Appy Coupon to get discount!</p>
                                    <form action="#">
                                        <div className="single-form form-default">
                                            <div className="form-input form">
                                                <input type="text" placeholder="Coupon Code" />
                                            </div>
                                            <div className="button">
                                                <button className="btn">apply</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="checkout-sidebar-price-table mt-30">
                                    <h5 className="title">Pricing Table</h5>
                                    <div className="sub-total-price">
                                        <div className="total-price">
                                            <p className="value">Subotal Price:</p>
                                            <p className="price">$144.00</p>
                                        </div>
                                        <div className="total-price shipping">
                                            <p className="value">Subotal Price:</p>
                                            <p className="price">$10.50</p>
                                        </div>
                                        <div className="total-price discount">
                                            <p className="value">Subotal Price:</p>
                                            <p className="price">$10.00</p>
                                        </div>
                                    </div>
                                    <div className="total-payable">
                                        <div className="payable-price">
                                            <p className="value">Subotal Price:</p>
                                            <p className="price">$164.50</p>
                                        </div>
                                    </div>
                                    <div className="price-table-btn button">
                                        <a href="/" className="btn btn-alt">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout

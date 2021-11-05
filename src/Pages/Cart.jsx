import React from 'react'
import './Cart.css'
import cart01 from '../assets/images/Cart/01.jpg'
import cart02 from '../assets/images/Cart/02.jpg'
import cart03 from '../assets/images/Cart/03.jpg'

function Cart() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Cart</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="/">Shop</a></li>
                                <li>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shopping-cart section">
                <div className="container">
                    <div className="cart-list-head">

                        <div className="cart-list-title">
                            <div className="row">
                                <div className="col-lg-1 col-md-1 col-12">
                                </div>
                                <div className="col-lg-4 col-md-3 col-12">
                                    <p>Product Name</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>Quantity</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>Unit Price</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>Subtotal</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <p>Remove</p>
                                </div>
                            </div>
                        </div>


                        <div className="cart-single-list">
                            <div className="row align-items-center">
                                <div className="col-lg-1 col-md-1 col-12">
                                    <a href="/"><img src={cart01} alt="#" /></a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-12">
                                    <h5 className="product-name"><a href="product-details.html">
                                        Canon EOS M50 Mirrorless Camera</a></h5>
                                    <p className="product-des">
                                        <span><em>Type:</em> Mirrorless</span>
                                        <span><em>Color:</em> Black</span>
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <div className="count-input">
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$910.00</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$910.00</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <a className="remove-item" href="/#"><i className="lni lni-close"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="cart-single-list">
                            <div className="row align-items-center">
                                <div className="col-lg-1 col-md-1 col-12">
                                    <a href="product-details.html"><img src={cart02} alt="#" /></a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-12">
                                    <h5 className="product-name"><a href="/">
                                        Apple iPhone X 256 GB Space Gray</a></h5>
                                    <p className="product-des">
                                        <span><em>Memory:</em> 256 GB</span>
                                        <span><em>Color:</em> Space Gray</span>
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <div className="count-input">
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$1100.00</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$1100.00</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <a className="remove-item" href="/#"><i className="lni lni-close"></i></a>
                                </div>
                            </div>
                        </div>


                        <div className="cart-single-list">
                            <div className="row align-items-center">
                                <div className="col-lg-1 col-md-1 col-12">
                                    <a href="product-details.html"><img src={cart03} alt="#" /></a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-12">
                                    <h5 className="product-name"><a href="/">HP LaserJet Pro Laser Printer</a></h5>
                                    <p className="product-des">
                                        <span><em>Type:</em> Laser</span>
                                        <span><em>Color:</em> White</span>
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <div className="count-input">
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$550.00</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$550.00</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <a className="remove-item" href="/#"><i className="lni lni-close"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">

                            <div className="total-amount">
                                <div className="row">
                                    <div className="col-lg-8 col-md-6 col-12">
                                        <div className="left">
                                            <div className="coupon">
                                                <form action="#" target="_blank">
                                                    <input name="Coupon" placeholder="Enter Your Coupon" />
                                                    <div className="button">
                                                        <button className="btn">Apply Coupon</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="right">
                                            <ul>
                                                <li>Cart Subtotal<span>$2560.00</span></li>
                                                <li>Shipping<span>Free</span></li>
                                                <li>You Save<span>$00.00</span></li>
                                                <li className="last">You Pay<span>$2560.00</span></li>
                                            </ul>
                                            <div className="button">
                                                <a href="/checkout" className="btn">Checkout</a>
                                                <a href="/products" className="btn btn-alt">Continue shopping</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart

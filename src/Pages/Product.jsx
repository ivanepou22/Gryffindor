import React from 'react'
import './Product.css'
import product1 from '../assets/images/product-details/01.jpg'
import product2 from '../assets/images/product-details/02.jpg'
import product3 from '../assets/images/product-details/03.jpg'
import product4 from '../assets/images/product-details/04.jpg'
import product5 from '../assets/images/product-details/05.jpg'

function Product() {
    return (
        <>
            {/* <!-- Start Breadcrumbs --> */}
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Single Product</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="index.html"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="index.html">Shop</a></li>
                                <li>Single Product</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumbs --> */}

            {/* <!-- Start Item Details --> */}
            <section className="item-details section">
                <div className="container">
                    <div className="top-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-images">
                                    <main id="gallery">
                                        <div className="main-img">
                                            <img src={product1} id="current" alt="#" />
                                        </div>
                                        <div className="images">
                                            <img src={product1} className="img" alt="#" />
                                            <img src={product2} className="img" alt="#" />
                                            <img src={product3} className="img" alt="#" />
                                            <img src={product4} className="img" alt="#" />
                                            <img src={product5} className="img" alt="#" />
                                        </div>
                                    </main>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-info">
                                    <h2 className="title">GoPro Karma Camera Drone</h2>
                                    <p className="category"><i className="lni lni-tag"></i> Drones: <a href="/">Action
                                        cameras</a></p>
                                    <h3 className="price">$850<span>$945</span></h3>
                                    <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt
                                        ut labore et dolore magna aliqua.</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group color-option">
                                                <label className="title-label" for="size">Choose color</label>
                                                <div className="single-checkbox checkbox-style-1">
                                                    <input type="checkbox" id="checkbox-1" checked />
                                                    <label for="checkbox-1"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-2">
                                                    <input type="checkbox" id="checkbox-2" />
                                                    <label for="checkbox-2"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-3">
                                                    <input type="checkbox" id="checkbox-3" />
                                                    <label for="checkbox-3"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-4">
                                                    <input type="checkbox" id="checkbox-4" />
                                                    <label for="checkbox-4"><span></span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group">
                                                <label for="color">Battery capacity</label>
                                                <select className="form-control" id="color">
                                                    <option>5100 mAh</option>
                                                    <option>6200 mAh</option>
                                                    <option>8000 mAh</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group quantity">
                                                <label for="color">Quantity</label>
                                                <select className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <div className="row align-items-end">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="button cart-button">
                                                    <button className="btn" style={{ width: `100%` }}>Add to Cart</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn"><i className="lni lni-reload"></i> Compare</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn"><i className="lni lni-heart"></i> To Wishlist</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-info">
                        <div className="single-block">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="info-body custom-responsive-margin">
                                        <h4>Details</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                                        <h4>Features</h4>
                                        <ul className="features">
                                            <li>Capture 4K30 Video and 12MP Photos</li>
                                            <li>Game-Style Controller with Touchscreen</li>
                                            <li>View Live Camera Feed</li>
                                            <li>Full Control of HERO6 Black</li>
                                            <li>Use App for Dedicated Camera Operation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="info-body">
                                        <h4>Specifications</h4>
                                        <ul className="normal-list">
                                            <li><span>Weight:</span> 35.5oz (1006g)</li>
                                            <li><span>Maximum Speed:</span> 35 mph (15 m/s)</li>
                                            <li><span>Maximum Distance:</span> Up to 9,840ft (3,000m)</li>
                                            <li><span>Operating Frequency:</span> 2.4GHz</li>
                                            <li><span>Manufacturer:</span> GoPro, USA</li>
                                        </ul>
                                        <h4>Shipping Options:</h4>
                                        <ul className="normal-list">
                                            <li><span>Courier:</span> 2 - 4 days, $22.50</li>
                                            <li><span>Local Shipping:</span> up to one week, $10.00</li>
                                            <li><span>UPS Ground Shipping:</span> 4 - 6 days, $18.00</li>
                                            <li><span>Unishop Global Export:</span> 3 - 4 days, $25.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Item Details --> */}
        </>
    )
}

export default Product

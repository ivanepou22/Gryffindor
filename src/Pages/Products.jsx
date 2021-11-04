import React from 'react'
import './Products.css'
import prod1 from '../assets/images/products/product-1.jpg'
import prod2 from '../assets/images/products/product-6.jpg'
import prod3 from '../assets/images/products/product-7.jpg'

function Products() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Products</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="/">Shop</a></li>
                                <li>Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-grids section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">

                            <div className="product-sidebar">

                                <div className="single-widget search">
                                    <h3>Search Product</h3>
                                    <form action="#">
                                        <input type="text" placeholder="Search Here..." />
                                        <button type="submit"><i class="lni lni-search-alt"></i></button>
                                    </form>
                                </div>


                                <div className="single-widget">
                                    <h3>All Categories</h3>
                                    <ul className="list">
                                        <li>
                                            <a href="/products">Computers &amp; Accessories </a><span>(1138)</span>
                                        </li>
                                        <li>
                                            <a href="/products">Smartphones &amp; Tablets</a><span>(2356)</span>
                                        </li>
                                        <li>
                                            <a href="/products">TV, Video &amp; Audio</a><span>(420)</span>
                                        </li>
                                        <li>
                                            <a href="/products">Cameras, Photo &amp; Video</a><span>(874)</span>
                                        </li>
                                        <li>
                                            <a href="/products">Headphones</a><span>(1239)</span>
                                        </li>
                                        <li>
                                            <a href="/products">Wearable Electronics</a><span>(340)</span>
                                        </li>
                                        <li>
                                            <a href="/products">Printers &amp; Ink</a><span>(512)</span>
                                        </li>
                                    </ul>
                                </div>


                                <div className="single-widget range">
                                    <h3>Price Range</h3>
                                    <input type="range" className="form-range" name="range" step="1" min="100" max="10000" value="10" onchange="rangePrimary.value=value" />
                                    <div class="range-inner">
                                        <label>$</label>
                                        <input type="text" id="rangePrimary" placeholder="100" />
                                    </div>
                                </div>


                                <div className="single-widget condition">
                                    <h3>Filter by Price</h3>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">
                                            $50 - $100L (208)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                        <label class="form-check-label" for="flexCheckDefault2">
                                            $100L - $500 (311)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                        <label class="form-check-label" for="flexCheckDefault3">
                                            $500 - $1,000 (485)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                        <label class="form-check-label" for="flexCheckDefault4">
                                            $1,000 - $5,000 (213)
                                        </label>
                                    </div>
                                </div>


                                <div className="single-widget condition">
                                    <h3>Filter by Brand</h3>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                        <label class="form-check-label" for="flexCheckDefault11">
                                            Apple (254)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                                        <label class="form-check-label" for="flexCheckDefault22">
                                            Bosh (39)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault33" />
                                        <label class="form-check-label" for="flexCheckDefault33">
                                            Canon Inc.(128)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault44" />
                                        <label class="form-check-label" for="flexCheckDefault44">
                                            Dell (310)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault55" />
                                        <label class="form-check-label" for="flexCheckDefault55">
                                            Hewlett-Packard (42)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault66" />
                                        <label class="form-check-label" for="flexCheckDefault66">
                                            Hitachi (217)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault77" />
                                        <label class="form-check-label" for="flexCheckDefault77">
                                            LG Electronics (310)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault88" />
                                        <label class="form-check-label" for="flexCheckDefault88">
                                            Panasonic (74)
                                        </label>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="product-grids-head">
                                <div className="product-grid-topbar">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7 col-md-8 col-12">
                                            <div className="product-sorting">
                                                <label for="sorting">Sort by:</label>
                                                <select className="form-control" id="sorting">
                                                    <option>Popularity</option>
                                                    <option>Low - High Price</option>
                                                    <option>High - Low Price</option>
                                                    <option>Average Rating</option>
                                                    <option>A - Z Order</option>
                                                    <option>Z - A Order</option>
                                                </select>
                                                <h3 className="total-show-product">Showing: <span>1 - 12 items</span></h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-4 col-12">
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true"><i className="lni lni-grid-alt"></i></button>
                                                    <button className="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><i className="lni lni-list"></i></button>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod1} alt="#" />
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Watches</span>
                                                        <h4 className="title">
                                                            <a href="/product">Xiaomi Mi Band 5</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star"></i></li>
                                                            <li><span>4.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$199.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod2} alt="#" />
                                                        <span class="sale-tag">-25%</span>
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Speaker</span>
                                                        <h4 className="title">
                                                            <a href="/product">Bluetooth Speaker</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$275.00</span>
                                                            <span className="discount-price">$300.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod3} alt="#" />
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Camera</span>
                                                        <h4 className="title">
                                                            <a href="/product">WiFi Security Camera</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$399.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod1} alt="#" />
                                                        <span class="new-tag">New</span>
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Phones</span>
                                                        <h4 className="title">
                                                            <a href="/product">iphone 6x plus</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$400.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod2} alt="#" />
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Headphones</span>
                                                        <h4 className="title">
                                                            <a href="/product">Wireless Headphones</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$350.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod3} alt="#" />
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Speaker</span>
                                                        <h4 className="title">
                                                            <a href="/product">Mini Bluetooth Speaker</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star"></i></li>
                                                            <li><span>4.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$70.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod1} alt="#" />
                                                        <span class="sale-tag">-50%</span>
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Headphones</span>
                                                        <h4 className="title">
                                                            <a href="/product">Wireless Headphones</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star"></i></li>
                                                            <li><span>4.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$100.00</span>
                                                            <span className="discount-price">$200.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod2} alt="#" />
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Laptop</span>
                                                        <h4 className="title">
                                                            <a href="/product">Apple MacBook Air</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$899.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">

                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={prod3} alt="#" />
                                                        <span class="sale-tag">-25%</span>
                                                        <div class="button">
                                                            <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">Speaker</span>
                                                        <h4 className="title">
                                                            <a href="/product">Bluetooth Speaker</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><i className="lni lni-star-filled"></i></li>
                                                            <li><span>5.0 Review(s)</span></li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>$275.00</span>
                                                            <span className="discount-price">$300.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">

                                                <div className="pagination left">
                                                    <ul className="pagination-list">
                                                        <li><a href="/">1</a></li>
                                                        <li className="active"><a href="/">2</a></li>
                                                        <li><a href="/">3</a></li>
                                                        <li><a href="/">4</a></li>
                                                        <li><a href="/"><i className="lni lni-chevron-right"></i></a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12">

                                                <div className="single-product">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-4 col-md-4 col-12">
                                                            <div className="product-image">
                                                                <img src="assets/images/products/product-1.jpg" alt="#" />
                                                                <div class="button">
                                                                    <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to
                                                                        Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 col-12">
                                                            <div className="product-info">
                                                                <span className="category">Watches</span>
                                                                <h4 className="title">
                                                                    <a href="/product">Xiaomi Mi Band 5</a>
                                                                </h4>
                                                                <ul className="review">
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star"></i></li>
                                                                    <li><span>4.0 Review(s)</span></li>
                                                                </ul>
                                                                <div className="price">
                                                                    <span>$199.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">

                                                <div className="single-product">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-4 col-md-4 col-12">
                                                            <div className="product-image">
                                                                <img src="assets/images/products/product-2.jpg" alt="#" />
                                                                <span class="sale-tag">-25%</span>
                                                                <div class="button">
                                                                    <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to
                                                                        Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 col-12">
                                                            <div className="product-info">
                                                                <span className="category">Speaker</span>
                                                                <h4 className="title">
                                                                    <a href="/product">Big Power Sound Speaker</a>
                                                                </h4>
                                                                <ul className="review">
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><span>5.0 Review(s)</span></li>
                                                                </ul>
                                                                <div className="price">
                                                                    <span>$275.00</span>
                                                                    <span className="discount-price">$300.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">

                                                <div className="single-product">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-4 col-md-4 col-12">
                                                            <div className="product-image">
                                                                <img src="assets/images/products/product-3.jpg" alt="#" />
                                                                <div class="button">
                                                                    <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to
                                                                        Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 col-12">
                                                            <div className="product-info">
                                                                <span className="category">Camera</span>
                                                                <h4 className="title">
                                                                    <a href="/product">WiFi Security Camera</a>
                                                                </h4>
                                                                <ul className="review">
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><span>5.0 Review(s)</span></li>
                                                                </ul>
                                                                <div className="price">
                                                                    <span>$399.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">

                                                <div className="single-product">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-4 col-md-4 col-12">
                                                            <div className="product-image">
                                                                <img src="assets/images/products/product-4.jpg" alt="#" />
                                                                <span class="new-tag">New</span>
                                                                <div class="button">
                                                                    <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to
                                                                        Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 col-12">
                                                            <div className="product-info">
                                                                <span className="category">Phones</span>
                                                                <h4 className="title">
                                                                    <a href="/product">iphone 6x plus</a>
                                                                </h4>
                                                                <ul className="review">
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><span>5.0 Review(s)</span></li>
                                                                </ul>
                                                                <div className="price">
                                                                    <span>$400.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">

                                                <div className="single-product">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-4 col-md-4 col-12">
                                                            <div className="product-image">
                                                                <img src="assets/images/products/product-7.jpg" alt="#" />
                                                                <span class="sale-tag">-50%</span>
                                                                <div class="button">
                                                                    <a href="/product" class="btn"><i class="lni lni-cart"></i> Add to
                                                                        Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 col-12">
                                                            <div className="product-info">
                                                                <span className="category">Headphones</span>
                                                                <h4 className="title">
                                                                    <a href="/product">PX7 Wireless Headphones</a>
                                                                </h4>
                                                                <ul className="review">
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star-filled"></i></li>
                                                                    <li><i className="lni lni-star"></i></li>
                                                                    <li><span>4.0 Review(s)</span></li>
                                                                </ul>
                                                                <div className="price">
                                                                    <span>$100.00</span>
                                                                    <span className="discount-price">$200.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">

                                                <div className="pagination left">
                                                    <ul className="pagination-list">
                                                        <li className="active"><a href="/">1</a></li>
                                                        <li><a href="/">2</a></li>
                                                        <li><a href="/">3</a></li>
                                                        <li><a href="/">4</a></li>
                                                        <li><a href="/"><i className="lni lni-chevron-right"></i></a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
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

export default Products

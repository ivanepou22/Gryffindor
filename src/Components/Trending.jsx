import React from 'react'
import { Link } from 'react-router-dom'
import product1 from '../assets/images/products/product-1.jpg'
import product2 from '../assets/images/products/product-2.jpg'
import product3 from '../assets/images/products/product-3.jpg'
import product4 from '../assets/images/products/product-4.jpg'
import product5 from '../assets/images/products/product-5.jpg'
import product6 from '../assets/images/products/product-6.jpg'
import product7 from '../assets/images/products/product-7.jpg'
import product8 from '../assets/images/products/product-8.jpg'

function Trending() {
    const products = [
        {
            id: 1,
            name: 'Xiaomi Mi Band 5',
            category: 'Watches',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 199.00,
            rating: 4,
            image: product1,
            discount: 10
        },
        {
            id: 2,
            name: 'Big Power Sound Speaker',
            category: 'Speaker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 300.00,
            rating: 5,
            image: product2,
            discount: 0
        },
        {
            id: 3,
            name: 'WiFi Security Camera',
            category: 'Camera',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 399.00,
            rating: 5,
            image: product3,
            discount: 0
        }
        ,
        {
            id: 4,
            name: 'iphone 6x plus',
            category: 'Phones',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 400.00,
            rating: 5,
            image: product4,
            discount: 25
        }
        ,
        {
            id: 5,
            name: 'Wireless Headphones',
            category: 'Headphones',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 350.00,
            rating: 5,
            image: product5,
            discount: 0
        }
        ,
        {
            id: 6,
            name: 'Mini Bluetooth Speaker',
            category: 'Speaker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 70.00,
            rating: 4,
            image: product6,
            discount: 0
        }
        ,
        {
            id: 7,
            name: 'PX7 Wireless Headphones',
            category: 'Headphones',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 200.00,
            rating: 4,
            image: product7,
            discount: 0
        },
        {
            id: 8,
            name: 'Apple MacBook Air',
            category: 'Laptop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 899.00,
            rating: 5,
            image: product8,
            discount: 15
        }

    ]
    return (

        // <!-- Start Trending Product Area -->
        <section className="trending-product section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Trending Product</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map(product => (
                            <div className="col-lg-3 col-md-6 col-12" key={product.id}>
                                {/* <!-- Start Single Product --> */}
                                <div className="single-product">
                                    <div className="product-image">
                                        <img src={product.image} alt="#" />
                                        {
                                            product.discount === 0 ? ('') : (
                                                <span className="sale-tag">-{product.discount}%</span>
                                            )
                                        }
                                        <Link key={product.id}
                                            to={{
                                                pathname: `/product/${product.id}`,
                                                state: product,
                                            }}
                                        >
                                            <div className="button">
                                                <button className="btn"><i className="lni lni-cart"></i> Add to Cart</button>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="product-info">
                                        <span className="category">{product.category}</span>
                                        <h4 className="title">
                                            <a href="product-grids.html">{product.name}</a>
                                        </h4>
                                        <ul className="review">
                                            {
                                                Array(product.rating).fill().map((_, index) => (
                                                    <li key={index}><i className="lni lni-star-filled"></i></li>
                                                ))
                                            }
                                            <li><span>{product.rating} Review(s)</span></li>
                                        </ul>
                                        <div className="price">
                                            {
                                                product.discount === 0 ? (
                                                    <span>
                                                        {
                                                            product.price.toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {
                                                            (product.price - (product.price * product.discount / 100)).toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }
                                                    </span>
                                                )

                                            }
                                            {
                                                product.discount === 0 ? ('') : (
                                                    <span className="discount-price">
                                                        {
                                                            product.price.toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Product --> */}
                            </div>

                        ))
                    }
                </div>
            </div>
        </section>
        //  ending the trending area
    )
}

export default Trending

import React from 'react'
import './Dasboard.css'
import { db } from '../firebase'
import { useEffect, useState } from 'react'

function Dasboard() {
    const [products, setProducts] = useState([]);
    //get data from firebase
    useEffect(() => {
        db.collection('products')
            .onSnapshot(snapshot => {
                setProducts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    product: doc.data()
                })))
            })
    }, [])
    return (
        <>
            <section class="trending-product section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product users-card">
                                <div class="product-info users-card">
                                    <span class="category">Users</span>
                                    <h4 class="title">
                                        <hr />
                                    </h4>
                                    <div class="price">
                                        <span className="users">
                                            0.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product">
                                <div class="product-info">
                                    <span class="category">Products</span>
                                    <h4 class="title">
                                        <hr />
                                    </h4>
                                    <div class="price">
                                        <span>
                                            {products?.length.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product">
                                <div class="product-info">
                                    <span class="category">Orders</span>
                                    <h4 class="title">
                                        <hr />
                                    </h4>
                                    <div class="price">
                                        <span>00.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product inbox-card">
                                <div class="product-info inbox-card">
                                    <span class="category">Categories</span>
                                    <h4 class="title">
                                        <hr />
                                    </h4>
                                    <div class="price">
                                        <span className="inbox">00.00</span>
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

export default Dasboard

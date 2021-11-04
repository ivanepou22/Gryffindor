import React from 'react'
// import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
import Heros from '../Components/Heros'
import Seller from '../Components/Seller'
import Support from '../Components/Support'
import Trending from '../Components/Trending'
import './Home.css'

function Home() {
    return (
        <>
            {/* Hero Area */}
            <Heros />
            {/* Feature Categories */}
            <Categories />
            {/* Trending Items */}
            <Trending />
            {/* Banner Section */}
            {/* <Banner /> */}
            {/* seller */}
            <Seller />
            {/* Support */}
            <Support />
        </>
    )
}

export default Home

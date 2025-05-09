import React from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';
import ProductList from '../components/ProductList';
import Advantages from '../components/Advantages';

import guyImg from '../assets/img/guy.png';
import forWomanImg from '../assets/img/offers/for_woman.png';
import forManImg from '../assets/img/offers/for_man.png';
import forKidsImg from '../assets/img/offers/for_kids.png';
import accessoriesImg from '../assets/img/offers/accesories.png';

export default function Home() {
    const navigate = useNavigate();
    const featured = products.slice(0, 6); // первые 6 товаров

    return (
        <div className="home-page">
            <div className="brand_baner">
                <img className="hide_on_mobile" src={guyImg} alt="main brand" />
                <div className="baner_logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="93" viewBox="0 0 12 92" fill="none">
                        <path d="M12 0.900879H0V92.9009H12V0.900879Z" fill="#F16D7F" />
                    </svg>
                    <div className="brand_text">
                        <p className="line1"><b>The brand</b></p>
                        <p className="line2">of luxerious <strong>fashion</strong></p>
                    </div>
                </div>
            </div>

            <div className="offers center">
                <div className="offer offer1">
                    <img src={forWomanImg} alt="offers for woman" />
                    <p className="line1">30% off</p>
                    <p className="line2">For woman</p>
                </div>
                <div className="offer offer2">
                    <img src={forManImg} alt="offers for man" />
                    <p className="line1">Hot deal</p>
                    <p className="line2">For man</p>
                </div>
                <div className="offer offer3">
                    <img src={forKidsImg} alt="offers for kids" />
                    <p className="line1">new arrivals</p>
                    <p className="line2">For kids</p>
                </div>
                <div className="offer big offer4">
                    <img src={accessoriesImg} alt="accessories offers" />
                    <p className="line1">LUXURIOUS & TRENDY</p>
                    <p className="line2">Accessories</p>
                </div>
            </div>

            <div className="featured_items center">
                <h1 className="title">Featured Items</h1>
                <p className="subtitle">Shop for items based on what we featured in this week</p>
                <ProductList products={featured} />
                <button className="browse_button" onClick={() => navigate('/catalog')}>
                    Browse All Product
                </button>
            </div>
            <Advantages />
        </div>
    );
}

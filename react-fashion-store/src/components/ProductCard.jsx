import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import cartIcon from '../assets/img/cart_icon.svg';

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className="item">
            <img src={product.image} alt={product.title} />
            <div className="hover">
                <button className="hover_button" onClick={() => dispatch(addToCart(product))}>
                    <img src={cartIcon} alt="cart icon" /> Add to Cart
                </button>
            </div>
            <div className="description">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
            </div>
        </div>
    );
}

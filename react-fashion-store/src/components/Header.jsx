import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/img/header/store_logo.png';
import search from '../assets/img/header/search.svg';
import menu from '../assets/img/header/menu_icon.svg';
import profile from '../assets/img/header/profile_icon.svg';
import cart from '../assets/img/header/cart_icon.svg';

export default function Header() {
    const cartItems = useSelector((state) => state.cart.items);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <header className="header center">
            <div className="header_buttons">
                <Link to="/">
                    <img src={logo} alt="store logo" />
                </Link>
                <img src={search} alt="search button" />
            </div>
            <div className="header_buttons">
                <img src={menu} alt="menu button" />
                <Link className="hide_on_mobile" to="/registration">
                    <img src={profile} alt="profile icon" />
                </Link>
                <div className="header__cart_amount hide_on_mobile" data-count={itemCount}>
                    <Link to="/cart">
                        <img className="cart-container" src={cart} alt="cart icon" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

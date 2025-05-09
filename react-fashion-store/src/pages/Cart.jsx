import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import CartItem from '../components/CartItem';
import Subscribe from '../components/Subscribe';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: Number(quantity) }));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        cartItems.forEach((item) => dispatch(removeFromCart(item.id)));
    };

    const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const grandTotal = subTotal + 15;

    return (
        <div className="cart-page">
            <header className="section_header center">
                <h1 className="section_header_title">SHOPPING CART</h1>
            </header>

            <section className="added-to-cart center">
                <div className="added-to-cart__container">
                    <div className="added-to-cart__items">
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onChangeQuantity={handleQuantityChange}
                                    onRemove={handleRemove}
                                />
                            ))
                        )}
                    </div>

                    <div className="added-to-cart__buttons">
                        <button
                            className="added-to-cart__button secondary-button clear-cart-btn"
                            onClick={handleClearCart}
                        >
                            CLEAR SHOPPING CART
                        </button>
                        <button className="added-to-cart__button secondary-button">
                            <a href="/catalog">CONTINUE SHOPPING</a>
                        </button>
                    </div>
                </div>

                <form className="added-to-cart__form">
                    <div className="added-to-cart__address">
                        <h1>SHIPPING ADDRESS</h1>
                        <input className="input-field" type="text" placeholder="Country" />
                        <input className="input-field" type="text" placeholder="State" />
                        <input className="input-field" type="text" placeholder="Postcode / Zip" />
                        <button type="submit" className="secondary-button">GET A QUOTE</button>
                    </div>

                    <div className="added-to-cart__checkout">
                        <p className="sub-total">Subtotal: ${subTotal.toFixed(2)}</p>
                        <p className="grand-total">GRAND TOTAL: ${grandTotal.toFixed(2)}</p>
                        <button className="primaty-button" type="submit">PROCEED TO CHECKOUT</button>
                    </div>
                </form>
            </section>

        </div>
    );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

export default function Cart() {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: Number(quantity) }));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const grandTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <p>${item.price} x</p>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={e => handleQuantityChange(item.id, e.target.value)}
                                />
                                <p>= ${item.price * item.quantity}</p>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h2>GRAND TOTAL: ${grandTotal.toFixed(2)}</h2>
                </>
            )}
        </div>
    );
}

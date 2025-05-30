import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [] // каждый элемент: { id, title, price, quantity }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

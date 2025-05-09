import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('cart');
        return data ? JSON.parse(data) : undefined;
    } catch {
        return undefined;
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serialized = JSON.stringify(state.cart);
        localStorage.setItem('cart', serialized);
    } catch (e) {
        console.error('Could not save state:', e);
    }
};

const preloadedState = {
    cart: loadFromLocalStorage() || { items: [] }
};

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    preloadedState
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productsSlice';

function AddProductForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: '', description: '', price: '', available: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({
            name: form.name,
            description: form.description,
            price: parseFloat(form.price),
            available: form.available,
        }));
        setForm({ name: '', description: '', price: '', available: false });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Название" value={form.name} onChange={handleChange} />
            <input name="description" placeholder="Описание" value={form.description} onChange={handleChange} />
            <input name="price" type="number" placeholder="Цена" value={form.price} onChange={handleChange} />
            <label>
                <input name="available" type="checkbox" checked={form.available} onChange={handleChange} />
                В наличии
            </label>
            <button type="submit">Добавить</button>
        </form>
    );
}

export default AddProductForm;

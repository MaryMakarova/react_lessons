import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../features/products/productsSlice';

function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <div>
            {products.map(p => (
                <div key={p.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <p>Цена: {p.price}</p>
                    <p>Доступен: {p.available ? 'Да' : 'Нет'}</p>
                    <button onClick={() => dispatch(toggleAvailability(p.id))}>Переключить доступность</button>
                    <button onClick={() => dispatch(deleteProduct(p.id))}>Удалить</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;

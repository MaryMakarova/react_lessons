import React, { useState, useEffect } from 'react';
import productsData from '../data/products';
import ProductList from '../components/ProductList';
import SizeFilter from '../components/SizeFilter';

export default function Catalog() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [filtered, setFiltered] = useState(productsData);

    useEffect(() => {
        if (selectedSize) {
            setFiltered(productsData.filter(p => p.size === selectedSize));
        } else {
            setFiltered(productsData);
        }
    }, [selectedSize]);

    return (
        <div>
            <h1>Catalog</h1>
            <SizeFilter selectedSize={selectedSize} onSelectSize={setSelectedSize} />
            <ProductList products={filtered} />
        </div>
    );
}

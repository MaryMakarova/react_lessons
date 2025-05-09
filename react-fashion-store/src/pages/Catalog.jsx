import React, { useState } from 'react';
import products from '../data/products';
import ProductList from '../components/ProductList';
import Advantages from '../components/Advantages';

const ITEMS_PER_PAGE = 9;

export default function Catalog() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [page, setPage] = useState(1);
    const [openDropdown, setOpenDropdown] = useState(null);

    const filtered = selectedSize
        ? products.filter(p => p.size === selectedSize)
        : products;

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const visibleProducts = filtered.slice(start, start + ITEMS_PER_PAGE);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setPage(1); // сбрасываем на первую страницу
    };

    return (
        <div className="catalog-page">
            <header className="section_header center">
                <h1 className="section_header_title">NEW ARRIVALS</h1>
                <div className="section_header_menu">
                    <a href="/" className="menu_item">HOME</a>
                    <a href="#" className="menu_item">MEN</a>
                    <a href="#" className="menu_item">NEW ARRIVAL</a>
                </div>
            </header>

            <section className="products center">
                <div className="sorting">
                    <details className="sorting__filter-block">
                        <summary><span>Filter</span></summary>
                        <div className="category-list">
                            <details><summary>Category</summary>
                                <div className="categoly-list__options">
                                    <label>Accessories</label>
                                    <label>Denim</label>
                                    <label>Hoodies & Sweatshirts</label>
                                </div>
                            </details>
                            <details><summary>Brand</summary>
                                <div className="categoly-list__options">
                                    <label>Option 1</label>
                                    <label>Option 2</label>
                                </div>
                            </details>
                        </div>
                    </details>

                    <div className="sorting__options">
                        {['Trending now', 'Size', 'Price'].map((label, idx) => (
                            <div
                                key={idx}
                                className={`dropdown ${openDropdown === idx ? 'open' : ''}`}
                            >
                                <div
                                    className="sorting__dropdown-toggle"
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === idx ? null : idx)
                                    }
                                >
                                    {label}
                                </div>

                                {openDropdown === idx && (
                                    <div className="dropdown-menu">
                                        {label === 'Size' ? (
                                            ['XS', 'S', 'M', 'L'].map(size => (
                                                <label key={size}>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedSize === size}
                                                        onChange={() =>
                                                            handleSizeChange(selectedSize === size ? null : size)
                                                        }
                                                    />
                                                    {size}
                                                </label>
                                            ))
                                        ) : (
                                            <>
                                                <label><input type="checkbox" /> Option 1</label>
                                                <label><input type="checkbox" /> Option 2</label>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                <ProductList products={visibleProducts} />

                <div className="pagination">
                    <a className={`prev ${page === 1 ? 'disabled' : ''}`} onClick={() => setPage(Math.max(1, page - 1))}>
                        ❮
                    </a>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <a
                            key={i}
                            className={page === i + 1 ? 'active' : ''}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </a>
                    ))}
                    <a className={`next ${page === totalPages ? 'disabled' : ''}`} onClick={() => setPage(Math.min(totalPages, page + 1))}>
                        ❯
                    </a>
                </div>

            </section>
            <Advantages />
        </div>
    );
}

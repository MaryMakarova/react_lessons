import React from 'react';

export default function SizeFilter({ selectedSize, onSelectSize }) {
    const sizes = ['XS', 'S', 'M', 'L'];

    return (
        <div className="size-filter">
            {sizes.map(size => (
                <button
                    key={size}
                    onClick={() => onSelectSize(size)}
                    style={{ fontWeight: selectedSize === size ? 'bold' : 'normal' }}
                >
                    {size}
                </button>
            ))}
            <button onClick={() => onSelectSize(null)}>All</button>
        </div>
    );
}

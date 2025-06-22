import React from 'react';
import './Products.css';

export default function Products({ products }) {
    return (
        <section>
            <h2 className="section-title">Produk Unggulan</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            <img src={product.image} alt={product.name} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/e2e8f0/4a5568?text=Image+Not+Found'; }}/>
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                            <p className="seller">{product.seller}</p>
                            <p className="location">{product.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

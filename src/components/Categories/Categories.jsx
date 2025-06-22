import React from 'react';
import './Categories.css';

export default function Categories({ categories }) {
     return (
        <section className="categories-section">
            <h2 className="section-title">Kategori Populer</h2>
            <div className="categories-grid">
                {categories.map((category) => (
                    <div key={category.name} className="category-card">
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
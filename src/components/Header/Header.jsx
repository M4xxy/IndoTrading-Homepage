import React, { useState } from 'react';
import './Header.css'; 
import { SearchIcon, GlobeAltIcon, ChevronDownIcon, ChatBubbleLeftRightIcon, ShoppingCartIcon, QuestionMarkCircleIcon, Bars3Icon } from '../../icon';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                <div className="top-bar padd-30">
                    <div className="logo-container">
                        <a href='#'><img src="src\img\logo.png" alt="logo" className='logo'/></a>
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder="Ketik Kebutuhan Anda" className="search-input" />
                        <button className="search-button">
                            <SearchIcon className="search-icon" />
                        </button>
                    </div>
                    <div className="actions-container">
                        <button className="lang-button action-button">
                            <GlobeAltIcon className="lang-icon"/>
                            <span>Indonesia</span>
                            <ChevronDownIcon className="chevron-icon"/>
                        </button>
                        <button className="action-button"><ChatBubbleLeftRightIcon className="action-icon"/></button>
                        <button className="action-button"><ShoppingCartIcon className="action-icon"/></button>
                        <button className="action-button"><QuestionMarkCircleIcon className="action-icon"/></button>
                        <div className="auth-buttons">
                            <button className="action-button">Login</button>
                            <span className="text-gray-300">/</span>
                            <button className="action-button">Daftar</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-nav">
                <div className="nav-links padd-30">
                    <button>KATEGORI</button>
                    <button className='active'>PRODUK</button>
                    <button>PERUSAHAAN</button>
                </div>
                <div className="mobile-menu-button">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Bars3Icon className="action-icon" />
                    </button>
                </div>
            </nav>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="container">
                    <button>PRODUK</button>
                    <button>PERUSAHAAN</button>
                    <button>Login / Daftar</button>
                </div>
            </div>
      </header>
    );
}
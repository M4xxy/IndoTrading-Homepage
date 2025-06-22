import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="about-us">
                        <h3>B2B MARKETPLACE INDONESIA</h3>
                        <p>IndoTrading.com adalah B2B Marketplace, Direktori Bisnis & Supplier Terbesar di Indonesia</p><br/>
                        <p>Situs Jual Beli khusus B2B Marketplace, B2B E-commerce, B2B, Pusat Distributor, Pabrik, Trading, 
                            Supplier, Agen, Grosir, Importir, Exportir dan Penyedia Jasa terlengkap di Indonesia.</p><br/>

                        <p>Segera Daftarkan perusahaan anda dan dapatkan akses ke informasi projek, tender dan dapatkan website gratis untuk perusahaan anda.</p>
                    </div>
                    <div className='footer-item'>
                        <h3>INFORMASI</h3>
                        <ul>
                            <li><a href="#">Hubungi Kami</a></li>
                            <li><a href="#">Indotrading FAQ</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">Karir</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Event IndoTrading</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>BELI</h3>
                        <ul>
                            <li><a href="#">Produk Terbaru</a></li>
                            <li><a href="#">Kategori Produk</a></li>
                            <li><a href="#">Kategori Perusahaan</a></li>
                            <li><a href="#">Register as Buyer</a></li>
                        </ul>
                        <br></br>
                        <h3>JUAL</h3>
                        <ul>
                            <li><a href="#">Perusahaan Terbaru</a></li>
                            <li><a href="#">Cari Proyek</a></li>
                            <li><a href="#">Daftar Jadi Supplier</a></li>
                        </ul>

                    </div>
                    <div>
                        <h3>OUR SERVICE</h3>
                        <ul>
                            <li><a href="#">Premium Supplier</a></li>
                            <li><a href="#">Premium Buyer</a></li>
                            <li><a href="#">SEO Service</a></li>
                            <li><a href="#">Google Ads</a></li>
                            <li><a href="#">Youtube Ads</a></li>
                            <li><a href="#">Social Media Ads</a></li>
                            <li><a href="#">Google Display Network</a></li>
                            <li><a href="#">Email Bisnis</a></li>
                            <li><a href="#">Buat Website</a></li>
                            <li><a href="#">Toko Daring</a></li>
                        </ul>
                    </div>
                    <div className="follow-us">
                        <h3>FOLLOW US</h3>
                        <div className="social-links">
                            <a href="#"><svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                            <a href="#"><svg viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                        </div>
                        <h3>DOWNLOAD OUR APPS</h3>
                        <a href="#" className="app-download">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play"/>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-links">
                        <span>Indonesia</span> |
                        <a href="#">Jakarta</a> |
                        <a href="#">Bali</a> |
                        <a href="#">Bandung</a>|
                        <a href="#">Semarang</a> |
                        <a href="#">Samarinda</a> |
                        <a href="#">Pontianak</a>|
                        <a href="#">Makassar</a> |
                        <a href="#">Manado</a> |
                        <a href="#">Palembang</a>|
                        <a href="#">Medan</a> |
                        <a href="#">Yogyakarta</a>  
                        <p>&copy; {new Date().getFullYear()}  Indotrading - Indonesia B2B Marketplace Direktori Bisnis Indonesia All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
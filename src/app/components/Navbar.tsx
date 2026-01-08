"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useShop } from '../context/ShopContext';
import styles from './Navbar.module.css';
import BrandBar from './BrandBar';
import { useState } from 'react';

export default function Navbar() {
    const { toggleContact } = useShop();
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === '/';
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/catalogo?q=${encodeURIComponent(searchTerm.trim())}`);
            setMobileMenuOpen(false);
        }
    };

    const handleContactClick = () => {
        toggleContact();
        setMobileMenuOpen(false);
    };

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.topBar}>
                <span>📍 Calle 1 nro. 1827, San Clemente del Tuyú</span>
                <span>📞 +54 2252 52-5532</span>
            </div>
            <div className={styles.navContainer}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.brandName}>
                        El Tanque
                    </Link>
                    <span className={styles.brandSubtitle}>Corralón y Ferretería</span>
                </div>

                <div className={styles.searchContainer}>
                    <form onSubmit={handleSearch} className={styles.searchForm}>
                        <input
                            type="text"
                            placeholder="Buscar productos, marcas y más..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className={styles.searchButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </form>
                </div>

                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Inicio</Link>
                    <Link href="/catalogo" className={styles.link}>Catálogo</Link>
                    <button onClick={toggleContact} className={styles.link} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit' }}>
                        Contacto
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={mobileMenuOpen}
                >
                    <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}
                onClick={closeMobileMenu}
            >
                <div
                    className={styles.mobileMenuContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.closeBtn} onClick={closeMobileMenu} aria-label="Cerrar menú">
                        ✕
                    </button>

                    <div className={styles.mobileSearch}>
                        <form onSubmit={handleSearch} className={styles.searchForm}>
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className={styles.searchInput}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className={styles.searchButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div className={styles.mobileLinks}>
                        <Link href="/" className={styles.mobileLink} onClick={closeMobileMenu}>
                            🏠 Inicio
                        </Link>
                        <Link href="/catalogo" className={styles.mobileLink} onClick={closeMobileMenu}>
                            📦 Catálogo
                        </Link>
                        <button onClick={handleContactClick} className={styles.mobileLink}>
                            📞 Contacto
                        </button>
                    </div>
                </div>
            </div>

            {isHome && <BrandBar />}
        </nav>
    );
}

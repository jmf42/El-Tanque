"use client";
export const dynamic = "force-dynamic";

import { useShop } from '../context/ShopContext';
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import CatalogSidebar from '../components/CatalogSidebar';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'next/navigation';
import CartModal from '../components/CartModal';

import { Suspense } from 'react';

function CatalogContent() {
    const { products, cart } = useShop();
    const searchParams = useSearchParams();
    const urlSearchQuery = searchParams.get('q') || '';

    const [category, setCategory] = useState('Todos');
    const [priceRange, setPriceRange] = useState('Todos');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [localSearch, setLocalSearch] = useState(urlSearchQuery);
    const [sortBy, setSortBy] = useState('default');

    // Sync URL search with local search on mount
    useEffect(() => {
        setLocalSearch(urlSearchQuery);
    }, [urlSearchQuery]);

    const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = products
        .filter(p => {
            // Filter by Category
            const matchesCategory = category === 'Todos' || p.category === category;

            // Filter by Search Query (use local search)
            const searchTerm = localSearch.toLowerCase();
            const matchesSearch = searchTerm
                ? p.name.toLowerCase().includes(searchTerm) ||
                p.category.toLowerCase().includes(searchTerm)
                : true;

            // Filter by Price Range
            let matchesPrice = true;
            if (priceRange === 'Hasta $10.000') {
                matchesPrice = (p.price || 0) <= 10000;
            } else if (priceRange === '$10.000 a $50.000') {
                matchesPrice = (p.price || 0) > 10000 && (p.price || 0) <= 50000;
            } else if (priceRange === 'Más de $50.000') {
                matchesPrice = (p.price || 0) > 50000;
            }

            return matchesCategory && matchesSearch && matchesPrice;
        })
        .sort((a, b) => {
            if (sortBy === 'price-asc') return (a.price || 0) - (b.price || 0);
            if (sortBy === 'price-desc') return (b.price || 0) - (a.price || 0);
            if (sortBy === 'name') return a.name.localeCompare(b.name);
            return 0;
        });

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <main>
            <Navbar />
            <div className={styles.page}>
                <h1 className={styles.title}>Catálogo Completo</h1>

                {/* Sticky Filter Section */}
                <div className={styles.filtersWrapper}>
                    {/* Search Bar */}
                    <div className={styles.searchBar}>
                        <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Buscar productos..."
                            value={localSearch}
                            onChange={(e) => setLocalSearch(e.target.value)}
                        />
                        {localSearch && (
                            <button
                                className={styles.clearSearch}
                                onClick={() => setLocalSearch('')}
                                aria-label="Limpiar búsqueda"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <CatalogSidebar
                        categories={categories}
                        selectedCategory={category}
                        onSelectCategory={setCategory}
                        selectedPriceRange={priceRange}
                        onSelectPriceRange={setPriceRange}
                    />
                </div>

                {/* Toolbar: Counter + Sort */}
                <div className={styles.toolbar}>
                    <span className={styles.resultCount}>
                        {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
                    </span>
                    <select
                        className={styles.sortSelect}
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Ordenar por</option>
                        <option value="price-asc">Menor precio</option>
                        <option value="price-desc">Mayor precio</option>
                        <option value="name">Nombre A-Z</option>
                    </select>
                </div>

                <div className={styles.layout}>
                    <div className={styles.mainContent}>
                        {filteredProducts.length > 0 ? (
                            <div className={styles.grid}>
                                {filteredProducts.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className={styles.cardWrapper}
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.noResults}>
                                <h3>No se encontraron productos</h3>
                                <p>Intenta con otra categoría o búsqueda.</p>
                            </div>
                        )}
                    </div>
                </div>

                {totalItems > 0 && (
                    <button
                        className={styles.cartFloating}
                        onClick={() => setIsCartOpen(true)}
                        aria-label="Ver pedido"
                    >
                        <div className={styles.cartIconWrapper}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                            <span className={styles.cartBadge}>{totalItems}</span>
                        </div>
                        <span className={styles.cartText}>Ver Pedido</span>
                    </button>
                )}
            </div>

            <CartModal
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </main>
    );
}

export default function CatalogPage() {
    return (
        <Suspense fallback={<div className={styles.loading}>Cargando catálogo...</div>}>
            <CatalogContent />
        </Suspense>
    );
}

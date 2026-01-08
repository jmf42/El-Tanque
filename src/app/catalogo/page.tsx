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
    const searchQuery = searchParams.get('q') || '';

    const [category, setCategory] = useState('Todos');
    const [priceRange, setPriceRange] = useState('Todos');
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Reset category if search query changes significantly, or keep it?
    // User might want to search WITHIN a category.
    // For now, let's keep them independent.

    const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = products.filter(p => {
        // Filter by Category
        const matchesCategory = category === 'Todos' || p.category === category;

        // Filter by Search Query
        const matchesSearch = searchQuery
            ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
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
    });

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <main>
            <Navbar />
            <div className={styles.page}>
                <h1 className={styles.title}>
                    {searchQuery ? `Resultados para "${searchQuery}"` : 'Catálogo Completo'}
                </h1>

                <div className={styles.layout}>
                    <CatalogSidebar
                        categories={categories}
                        selectedCategory={category}
                        onSelectCategory={setCategory}
                        selectedPriceRange={priceRange}
                        onSelectPriceRange={setPriceRange}
                    />

                    <div className={styles.mainContent}>
                        {filteredProducts.length > 0 ? (
                            <div className={styles.grid}>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
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

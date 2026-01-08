"use client";
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import styles from './ProductCard.module.css';
import { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useShop();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain', padding: '10px' }}
                />
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name} title={product.name}>{product.name}</h3>

                <div className={styles.price}>
                    {product.price ? `$${product.price.toLocaleString()}` : 'Consultar'}
                </div>

                <button
                    className={styles.addButton}
                    onClick={handleAddToCart}
                    style={isAdded ? { backgroundColor: '#4caf50', borderColor: '#4caf50', color: 'white' } : {}}
                >
                    {isAdded ? (
                        <>
                            <span>✓</span> Agregado
                        </>
                    ) : (
                        'AGREGAR'
                    )}
                </button>
            </div>
        </div>
    );
}

"use client";
import styles from './CatalogSidebar.module.css';

interface CatalogSidebarProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    selectedPriceRange: string;
    onSelectPriceRange: (range: string) => void;
}

export default function CatalogSidebar({
    categories,
    selectedCategory,
    onSelectCategory,
    selectedPriceRange,
    onSelectPriceRange
}: CatalogSidebarProps) {
    const priceRanges = ['Todos', 'Hasta $10.000', '$10.000 a $50.000', 'Más de $50.000'];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Categorías</h3>
                <div className={styles.list}>
                    {categories.map(c => (
                        <button
                            key={c}
                            className={`${styles.filterBtn} ${selectedCategory === c ? styles.active : ''}`}
                            onClick={() => onSelectCategory(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Precio</h3>
                <div className={styles.list}>
                    {priceRanges.map(range => (
                        <button
                            key={range}
                            className={`${styles.filterBtn} ${selectedPriceRange === range ? styles.active : ''}`}
                            onClick={() => onSelectPriceRange(range)}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}

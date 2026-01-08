import Link from 'next/link';
import styles from './BrandBar.module.css';

export default function BrandBar() {
    const categories = [
        "Cemento", "Ladrillos", "Pinturas", "Herramientas",
        "Sanitarios", "Electricidad", "Hierros", "Caños",
        "Arena y Piedra", "Membranas"
    ];

    return (
        <div className={styles.brandBar}>
            <div className={styles.track}>
                {categories.map((cat, i) => (
                    <Link key={i} href="/catalogo" className={styles.brand}>
                        {cat}
                    </Link>
                ))}
                {/* Duplicate for infinite scroll effect */}
                {categories.slice(0, 5).map((cat, i) => (
                    <Link key={`dup-${i}`} href="/catalogo" className={styles.brand}>
                        {cat}
                    </Link>
                ))}
            </div>
        </div>
    );
}

import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import StarRating from './StarRating';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Fallback image if storefront is not perfect, but using it as requested */}
            <Image
                src="/images/storefront_real.jpg"
                alt="Ferretería El Tanque - San Clemente del Tuyú"
                fill
                className={styles.bgImage}
                priority
            />
            <div className={styles.overlay} />

            <div className={styles.content}>
                <div className={styles.sinceBadge}>Desde 1975</div>
                <h1 className={styles.title}>
                    Ferretería <br />
                    <span className={styles.brandScript}>El Tanque</span>
                </h1>
                <p className={styles.subtitle}>
                    Más de 50 años brindando soluciones para la construcción en San Clemente del Tuyú. Calidad, precio y atención personalizada.
                </p>
                <div className={styles.reviews}>
                    <StarRating rating={4.5} className={styles.stars} />
                    <span className={styles.reviewText}>4.5/5 (180+ reseñas)</span>
                </div>
                <Link href="/catalogo" className={styles.ctaButton}>
                    Ver Catálogo Online
                </Link>
            </div>
        </section>
    );
}

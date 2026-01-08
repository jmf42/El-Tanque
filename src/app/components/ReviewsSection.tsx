import styles from './ReviewsSection.module.css';
import StarRating from './StarRating';

export default function ReviewsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>
                <div className={styles.googleBadge}>
                    <span className={styles.gLogo}>G</span>
                    <div className={styles.gInfo}>
                        <StarRating rating={4.5} />
                        <span className={styles.gCount}>en Google Maps</span>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <span className={styles.name}>Juan</span>
                            <StarRating rating={5} />
                        </div>
                        <p className={styles.text}>"Excelente atención de sus dueños. Tienen todo lo que necesitás para construir. Precios muy honestos."</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <span className={styles.name}>María</span>
                            <StarRating rating={5} />
                        </div>
                        <p className={styles.text}>"El mejor corralón de San Clemente. Entrega rápida y confiable. Siempre compro acá."</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <span className={styles.name}>Carlos</span>
                            <StarRating rating={4.5} />
                        </div>
                        <p className={styles.text}>"Muy surtido en ferretería y electricidad. La atención es de primera."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

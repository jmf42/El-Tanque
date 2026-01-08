import styles from './Features.module.css';

export default function AboutSection() {
    return (
        <section className={styles.section} style={{ paddingBottom: '0' }}>
            <div className={styles.container}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <h2 className={styles.title} style={{ marginBottom: '1.5rem' }}>Especialistas en San Clemente</h2>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                        Somos un comercio que brinda servicio desde el año 1975, atendido por sus propios dueños, siendo pioneros en la venta de artículos de ferretería, sanitarios, electricidad, pinturas, limpieza y bazar.
                    </p>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '2rem auto' }}></div>
                </div>
            </div>
        </section>
    );
}

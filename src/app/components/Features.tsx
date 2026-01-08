import styles from './Features.module.css';

export default function Features() {
    const features = [
        {
            title: "Ferretería & Herramientas",
            icon: "🛠️",
            text: "Taladros, caladoras, amoladoras y herramientas profesionales."
        },
        {
            title: "Pinturas",
            icon: "🎨",
            text: "Látex, sintéticos, impermeabilizantes y accesorios para pintar."
        },
        {
            title: "Sanitaria & Corralón",
            icon: "🏗️",
            text: "Materiales gruesos, grifería, caños y artículos de baño."
        },
        {
            title: "Electricidad & Bazar",
            icon: "💡",
            text: "Cables, iluminación, artículos del hogar y bazar integral."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Nuestros Rubros</h2>
                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <div key={i} className={styles.card}>
                            <span className={styles.icon}>{f.icon}</span>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardText}>{f.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

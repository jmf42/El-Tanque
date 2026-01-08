'use client';

import { useState, useRef } from 'react';
import styles from './MapSection.module.css';

export default function MapSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Nuestra Ubicación</h2>
                <p className={styles.address}>
                    📍 <strong>Calle 1 Nro. 1827</strong> <br />
                    (San Clemente del Tuyú)
                </p>
                <div
                    className={styles.mapContainer}
                    ref={containerRef}
                >
                    {!isLoaded && (
                        <div
                            className={styles.placeholder}
                            style={{ backgroundImage: 'url("/map-placeholder.png")' }}
                        >
                            <div className={styles.placeholderOverlay}>
                                <div className={styles.spinner}></div>
                            </div>
                        </div>
                    )}

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d-56.7212!3d-36.3559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c1ca076d8542d%3A0xb208285cee89dcf1!2sEl%20Tanque%20-%20Corral%C3%B3n%20Ferreter%C3%ADa!5e0!3m2!1ses!2sar!4v1767900626529!5m2!1ses!2sar"
                        className={`${styles.iframe} ${isLoaded ? styles.iframeVisible : ''}`}
                        allowFullScreen={true}
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación real de El Tanque"
                        onLoad={() => setIsLoaded(true)}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './MapSection.module.css';

export default function MapSection() {
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

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
                    onClick={() => setShouldLoad(true)}
                >
                    {(!shouldLoad || !isLoaded) && (
                        <div
                            className={`${styles.placeholder} ${isLoaded ? styles.hidden : ''}`}
                            style={{ backgroundImage: 'url("/map-placeholder.png")' }}
                        >
                            <div className={styles.placeholderOverlay}>
                                {shouldLoad ? (
                                    <div className={styles.spinner}></div>
                                ) : (
                                    <div className={styles.spinner} style={{ opacity: 0.5 }}></div>
                                )}
                            </div>
                        </div>
                    )}

                    {shouldLoad && (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15113.735289490274!2d-56.7299754!3d-36.3474137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c1ca076d8542d%3A0xb208285cee89dcf1!2sEl%20Tanque%20-%20Corral%C3%B3n%20Ferreter%C3%ADa!5e1!3m2!1sen!2sar!4v1767713559855!5m2!1sen!2sar"
                            className={`${styles.iframe} ${isLoaded ? styles.iframeVisible : ''}`}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación real de El Tanque"
                            onLoad={() => setIsLoaded(true)}
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
}

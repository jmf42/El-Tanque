"use client";
import { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import styles from './ContactModal.module.css';

export default function ContactModal() {
    const { isContactOpen, toggleContact } = useShop();

    useEffect(() => {
        if (isContactOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isContactOpen]);

    if (!isContactOpen) return null;

    return (
        <div className={styles.overlay} onClick={toggleContact}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={toggleContact}>×</button>

                <div className={styles.header}>
                    <h2 className={styles.title}>Contactanos</h2>
                    <p className={styles.subtitle}>Estamos para asesorarte</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.option}>
                        <a href="https://wa.me/542252525532" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                            WhatsApp
                        </a>
                        <p className={styles.note}>Respuesta rápida para presupuestos</p>
                    </div>

                    <div className={styles.divider}>o</div>

                    <div className={styles.infoRow}>
                        <span className={styles.icon}>📞</span>
                        <div>
                            <strong>Llámanos</strong>
                            <a href="tel:+542252525532" className={styles.link}>+54 2252 52-5532</a>
                        </div>
                    </div>

                    <div className={styles.infoRow}>
                        <span className={styles.icon}>📍</span>
                        <div>
                            <strong>Visitanos</strong>
                            <a
                                href="https://maps.app.goo.gl/GQKRr1uXfnqZDFqt6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <p>Calle 1 nro. 1827, San Clemente del Tuyú</p>
                            </a>
                        </div>
                    </div>

                    <div className={styles.infoRow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" className={styles.icon}>
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        <div>
                            <strong>Facebook</strong>
                            <a href="https://www.facebook.com/people/Ferreter%C3%ADa-El-Tanque/100064116541410/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                Ferretería El Tanque
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

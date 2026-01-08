import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} id="contacto">
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>El Tanque</h3>
                    <p>
                        Más de 50 años brindando soluciones para la construcción en San Clemente del Tuyú.
                        Calidad, precio y atención personalizada.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Contacto</h3>
                    <ul className={styles.infoList}>
                        <li>
                            <a
                                href="https://maps.app.goo.gl/GQKRr1uXfnqZDFqt6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                style={{ color: 'inherit', textDecoration: 'none' }}
                            >
                                📍 Calle 1 nro. 1827, San Clemente
                            </a>
                        </li>
                        <li>📞 +54 2252 52-5532</li>
                        <li>
                            <a href="https://www.facebook.com/people/Ferreter%C3%ADa-El-Tanque/100064116541410/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                                Seguinos en Facebook
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Horarios</h3>
                    <ul className={styles.infoList}>
                        <li>🕒 Lun - Sab: 08:30 – 12:30</li>
                        <li>🕒 Lun - Sab: 15:30 – 18:00</li>
                        <li>❌ <strong>Domingo Cerrado</strong></li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                © {new Date().getFullYear()} El Tanque - Corralón y Ferretería. Todos los derechos reservados.
            </div>
        </footer>
    );
}

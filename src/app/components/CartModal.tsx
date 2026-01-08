"use client";
import { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import styles from './CartModal.module.css';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
    const { cart, addToCart, removeFromCart } = useShop();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + ((item.price || 0) * item.quantity), 0);

    // Generate WhatsApp Link with improved message
    const checkoutMessage = encodeURIComponent(
        `¡Hola! 👋\n\nMe interesa realizar el siguiente pedido:\n\n` +
        cart.map(item => `• ${item.quantity}x ${item.name} — $${((item.price || 0) * item.quantity).toLocaleString('es-AR')}`).join('\n') +
        `\n\n📦 Total: ${totalItems} artículo${totalItems > 1 ? 's' : ''}\n💰 Estimado: $${totalPrice.toLocaleString('es-AR')}\n\n¿Podrían confirmarme disponibilidad y precio final? ¡Gracias!`
    );
    const whatsappLink = `https://wa.me/542252525532?text=${checkoutMessage}`;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <div className={styles.header}>
                    <h2 className={styles.title}>🛒 Tu Pedido</h2>
                    <p className={styles.subtitle}>{totalItems} artículo{totalItems > 1 ? 's' : ''} seleccionado{totalItems > 1 ? 's' : ''}</p>
                </div>

                <div className={styles.content}>
                    {cart.length === 0 ? (
                        <div className={styles.emptyCart}>
                            <span className={styles.emptyIcon}>🛒</span>
                            <p>Tu carrito está vacío</p>
                        </div>
                    ) : (
                        <div className={styles.cartItems}>
                            {cart.map(item => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div className={styles.itemInfo}>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemPrice}>${(item.price || 0).toLocaleString('es-AR')} c/u</span>
                                    </div>
                                    <div className={styles.quantityControls}>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            −
                                        </button>
                                        <span className={styles.quantity}>{item.quantity}</span>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => addToCart(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.itemTotal}>
                                        ${((item.price || 0) * item.quantity).toLocaleString('es-AR')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {cart.length > 0 && (
                        <>
                            <div className={styles.divider}></div>

                            <div className={styles.totals}>
                                <div className={styles.totalRow}>
                                    <span>Subtotal estimado</span>
                                    <span className={styles.totalPrice}>${totalPrice.toLocaleString('es-AR')}</span>
                                </div>
                                <p className={styles.note}>* Precio final sujeto a confirmación</p>
                            </div>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappBtn}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                Pedir por WhatsApp
                            </a>
                            <p className={styles.helpText}>Te responderemos a la brevedad</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

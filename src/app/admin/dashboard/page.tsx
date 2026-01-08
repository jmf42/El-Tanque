"use client";

import { useShop } from '../../context/ShopContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './dashboard.module.css';

export default function AdminDashboard() {
    const { isAuthenticated, products, addProduct, deleteProduct, logout } = useShop();
    const router = useRouter();

    // Form State
    const [view, setView] = useState<'list' | 'add'>('list');
    const [newName, setNewName] = useState('');
    const [newCat, setNewCat] = useState('Construcción');
    const [newPrice, setNewPrice] = useState('');
    const [newDesc, setNewDesc] = useState('');

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/admin');
        }
    }, [isAuthenticated, router]);

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        addProduct({
            id: Date.now().toString(),
            name: newName,
            category: newCat,
            price: Number(newPrice),
            description: newDesc,
            image: 'https://placehold.co/400x400/png?text=' + newName.split(' ')[0]
        });
        alert('✅ Producto Creado Exitosamente');
        setView('list');
        setNewName('');
        setNewPrice('');
        setNewDesc('');
    };

    if (!isAuthenticated) return null;

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Panel de Administración</h1>
                <button onClick={logout} className={styles.logoutBtn}>Salir</button>
            </header>

            <div className={styles.actions}>
                <button
                    className={`${styles.bigBtn} ${view === 'add' ? styles.active : ''}`}
                    onClick={() => setView('add')}
                >
                    ➕ NUEVO PRODUCTO
                </button>
                <button
                    className={`${styles.bigBtn} ${view === 'list' ? styles.active : ''}`}
                    onClick={() => setView('list')}
                >
                    📋 VER LISTA ({products.length})
                </button>
            </div>

            {view === 'add' && (
                <form onSubmit={handleCreate} className={styles.formContainer}>
                    <h2>Agregar Nuevo Producto</h2>

                    <label>Nombre del Producto</label>
                    <input value={newName} onChange={e => setNewName(e.target.value)} required />

                    <label>Categoría</label>
                    <select value={newCat} onChange={e => setNewCat(e.target.value)}>
                        <option>Construcción</option>
                        <option>Herramientas</option>
                        <option>Pinturería</option>
                        <option>Instalaciones</option>
                        <option>Electricidad</option>
                    </select>

                    <label>Precio ($)</label>
                    <input type="number" value={newPrice} onChange={e => setNewPrice(e.target.value)} required />

                    <label>Descripción Corta</label>
                    <input value={newDesc} onChange={e => setNewDesc(e.target.value)} />

                    <button type="submit" className={styles.saveBtn}>💾 GUARDAR PRODUCTO</button>
                </form>
            )}

            {view === 'list' && (
                <div className={styles.listContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(p => (
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td>{p.category}</td>
                                    <td>${p.price}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                if (confirm('¿Borrar este producto?')) deleteProduct(p.id);
                                            }}
                                            className={styles.deleteBtn}
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

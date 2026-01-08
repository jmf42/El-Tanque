"use client";

import { useShop } from '../context/ShopContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './login.module.css';

export default function AdminLogin() {
    const { login } = useShop();
    const router = useRouter();
    const [pin, setPin] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(pin)) {
            router.push('/admin/dashboard');
        } else {
            setError(true);
            setPin('');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Acceso Dueños</h1>
                <p className={styles.subtitle}>Ingrese su PIN de seguridad</p>

                <form onSubmit={handleLogin} className={styles.form}>
                    <input
                        type="password"
                        value={pin}
                        onChange={(e) => { setPin(e.target.value); setError(false); }}
                        className={styles.input}
                        placeholder="****"
                        maxLength={4}
                        autoFocus
                    />
                    {error && <p className={styles.error}>PIN Incorrecto</p>}
                    <button type="submit" className={styles.button}>INGRESAR</button>
                </form>
            </div>
        </div>
    );
}

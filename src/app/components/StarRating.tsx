import React from 'react';
import styles from './StarRating.module.css';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    className?: string;
}

export default function StarRating({ rating, maxRating = 5, className = '' }: StarRatingProps) {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
        if (i <= Math.floor(rating)) {
            // Full star
            stars.push(
                <svg key={i} className={styles.star} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            );
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            // Half star
            stars.push(
                <svg key={i} className={styles.star} viewBox="0 0 24 24" fill="currentColor">
                    <defs>
                        <linearGradient id={`halfStarGradient-${i}`}>
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#e0e0e0" />
                        </linearGradient>
                    </defs>
                    <path fill={`url(#halfStarGradient-${i})`} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            );
        } else {
            // Empty star
            stars.push(
                <svg key={i} className={`${styles.star} ${styles.empty}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            );
        }
    }

    return (
        <div className={`${styles.starRating} ${className}`}>
            {stars}
        </div>
    );
}

'use strict'; // Error boundaries must be Client Components
'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
                <h2 className="text-4xl font-bold text-red-600 mb-4">¡Ups!</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Algo salió mal</h3>
                <p className="text-gray-600 mb-8">Ha ocurrido un error inesperado. Por favor, intenta nuevamente.</p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                        className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                    >
                        Intentar de nuevo
                    </button>
                    <a
                        href="/"
                        className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300"
                    >
                        Ir al Inicio
                    </a>
                </div>
            </div>
        </div>
    )
}

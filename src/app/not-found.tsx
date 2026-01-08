import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
                <h2 className="text-6xl font-bold text-red-600 mb-4">404</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Página no encontrada</h3>
                <p className="text-gray-600 mb-8">Lo sentimos, no pudimos encontrar el recurso que estabas buscando.</p>
                <Link
                    href="/"
                    className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    )
}

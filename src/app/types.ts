export type Product = {
    id: string;
    name: string;
    category: string;
    price?: number; // Optional, sometimes price varies
    image: string;
    description?: string;
};

export type CartItem = Product & {
    quantity: number;
};

export const INITIAL_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Cemento Loma Negra 50kg',
        category: 'Corralón',
        price: 9800,
        image: 'https://http2.mlstatic.com/D_NQ_NP_955089-MLA99590617476_122025-O.webp',
        description: 'Cemento Portland de alta resistencia (CPC 40). El más confiable para estructuras y hormigón armado.'
    },
    {
        id: '2',
        name: 'Ladrillo Hueco 12x18x33',
        category: 'Corralón',
        price: 380,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_905174-MLA93500056773_092025-E.webp',
        description: 'Ladrillo cerámico 12 huecos. Ideal para paredes de 15cm. Excelente aislación térmica y acústica.'
    },
    {
        id: '3',
        name: 'Látex Interior Blanco 20L',
        category: 'Pinturas',
        price: 48500,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_623985-MLA99419861544_112025-E.webp',
        description: 'Pintura látex suprema de alto poder cubritivo. Lavable, antihongo y de terminación mate impecable.'
    },
    {
        id: '4',
        name: 'Tanque Rotoplas 1000L',
        category: 'Sanitaria',
        price: 129000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_943655-MLA99491585228_112025-E.webp',
        description: 'Tanque tricapa con tecnología Expel anti-bacterias. Incluye brida y aireador. Garantía de por vida.'
    },
    {
        id: '5',
        name: 'Taladro DeWalt 20V Max',
        category: 'Herramientas',
        price: 145000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_951012-MLA99548307472_122025-E.webp',
        description: 'Taladro percutor inalámbrico con motor sin escobillas. Potencia y durabilidad extrema para profesionales.'
    },
    {
        id: '6',
        name: 'Sierra Circular 1800W',
        category: 'Herramientas',
        price: 92000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_642220-MLA99485815966_112025-E.webp',
        description: 'Motor de alto torque para cortes precisos en maderas duras. Empuñadura ergonómica y base ajustable.'
    },
    {
        id: '7',
        name: 'Grifería Cocina Monocomando',
        category: 'Sanitaria',
        price: 68000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_891989-MLA99524417542_122025-E.webp',
        description: 'Pico móvil alto con aireador. Cartucho cerámico de 35mm. Acabado cromo brillante de alta resistencia.'
    },
    {
        id: '8',
        name: 'Membrana Megaflex 4mm',
        category: 'Corralón',
        price: 34000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_647069-MLA99575722968_122025-E.webp',
        description: 'Membrana asfáltica con aluminio flexible. Máxima protección hidrófuga para techos expuestos.'
    },
    {
        id: '9',
        name: 'Cal Milagro Hidratada 25kg',
        category: 'Corralón',
        price: 4900,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_876259-MLA99618158380_122025-E.webp',
        description: 'Cal aérea hidratada de gran pureza. Ideal para revoques finos, gruesos y blanqueos tradicionales.'
    },
    {
        id: '10',
        name: 'Barniz Cetol Cristal 4L',
        category: 'Pinturas',
        price: 31000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_727633-MLA99453789540_112025-E.webp',
        description: 'Protector de maderas con filtro solar. No se descascara y mantiene la madera respirando.'
    },
    {
        id: '11',
        name: 'Inodoro Ferrum Bari Completo',
        category: 'Sanitaria',
        price: 105000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_985855-MLA98385946459_112025-E.webp',
        description: 'Inodoro largo con depósito de apoyar. Loza blanca de primera calidad. Repuestos originales siempre disponibles.'
    },
    {
        id: '12',
        name: 'Termotanque Eléctrico 80L',
        category: 'Sanitaria',
        price: 138000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_730366-MLA99498599303_112025-E.webp',
        description: 'Termotanque de alta recuperación. Aislación de poliuretano inyectado para ahorro de energía.'
    },
    {
        id: '13',
        name: 'Perfil C Galvanizado 100x50',
        category: 'Corralón',
        price: 28500,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_813725-MLU75699148019_042024-E.webp',
        description: 'Perfil de hierro galvanizado de 2.0mm. Estructura liviana y resistente para techos de chapa.'
    },
    {
        id: '14',
        name: 'Caja Stanley FatMax 23"',
        category: 'Herramientas',
        price: 18900,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_969222-MLA97242944469_112025-E.webp',
        description: 'Caja de herramientas estanca con cierres metálicos y bandeja interior. Ultra resistente.'
    },
    {
        id: '15',
        name: 'Hormigonera Reforzada 1/2 HP',
        category: 'Herramientas',
        price: 295000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_738483-MLA99504551752_112025-E.webp',
        description: 'Mezcladora de 130 litros con motor blindado. Ruedas de goma maciza y corona de fundición.'
    },
    {
        id: '16',
        name: 'Hidrolavadora Karcher K2',
        category: 'Herramientas',
        price: 112000,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_928306-MLA99496680862_112025-E.webp',
        description: '110 bar de presión. Incluye lanza variable y manguera de 4 metros. Ideal para el hogar.'
    },
    {
        id: '17',
        name: 'Hierro del 10 (Barra 12m)',
        category: 'Corralón',
        price: 24500,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_602287-MLA47490868126_092021-E.webp',
        description: 'Barra de acero ADN 420. Cumple con normas IRAM. El corazón de tu estructura.'
    },
    {
        id: '18',
        name: 'Placa Durlock Estándar 1.2x2.4',
        category: 'Corralón',
        price: 13500,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_697211-MLA31139696670_062019-E.webp',
        description: 'Placa de yeso de 12.5mm para paredes y cielorrasos. Fácil instalación y terminación perfecta.'
    },
    {
        id: '19',
        name: 'Tablero 12 Bocas Sica',
        category: 'Electricidad',
        price: 9200,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_844930-MLA48766563029_012022-E.webp',
        description: 'Caja de embutir para llaves térmicas y disyuntor. Material ignífugo certificado.'
    },
    {
        id: '20',
        name: 'Kit Destornilladores Stanley (6)',
        category: 'Herramientas',
        price: 14500,
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_921989-MLA99490226908_112025-E.webp',
        description: 'Puntas magnéticas CushionGrip. Incluye planos y philips. Indispensables en tu caja.'
    }
];

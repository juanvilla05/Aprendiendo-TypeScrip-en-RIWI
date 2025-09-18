// aqui vamos a importar las interfaces creadas para saber que componentes debe llevar el objeto
import type { Product } from "@/dto/Product"; // importada  opn el alias recordemos que la otra forma es "../dto/Product"

// creamos la constante o vcariable tipo array PRODUCTS: Product [] aqui donde vamos guardar la lista 
export const PRODUCTS : Product [] = [
    {
        id:'p-001', // en el array las caracteristicas que voy agregar de los productos se separan con coma ,
        name: 'wireless mouse pro', // Mouse inalambrico
        brand: 'acme',
        quantity: 35,
        price:{ amount: 29_99, currency:'USD' },
        isActive: true,
        specs:{color:'gray'},
    },
    {
        id:'p-002',
        name:"mechanical keyboard tkl",
        brand: 'keyworld',
        quantity: 0,
        price:{ amount: 89_99,currency:'USD'},
        isActive: false,
    },
];

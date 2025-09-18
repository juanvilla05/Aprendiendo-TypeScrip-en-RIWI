export interface Price { // interface de preico
    amount: number; // cantidad
    currency: 'COP' | 'USD' //Moneda
}

export interface Product { // interface de producto
    id: string;
    name: string; // Nombre
    brand: string; // Marca
    quantity: number; // cantidad
    price: Price; // Precio
    isActive: boolean; // el producto esta activo? boolean (verdadero o false)
    specs?: { // especificaciones, con el signo ? definimos que el dato puede quedar vacio, es un campo opcional
        weightGr?: number; // 
        color?: string;
    };
}
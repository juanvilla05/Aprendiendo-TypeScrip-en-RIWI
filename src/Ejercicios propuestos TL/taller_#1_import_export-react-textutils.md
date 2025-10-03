# Taller: Imports & Exports con React + TypeScript (Versión con utilidades de texto)

**Objetivo:** Construir un listado de productos tipado con **interfaces**, separando la **definición de tipos (dto)**, los **datos (utils)** y las **funciones de texto (utils)**, y un **componente React** que renderiza con `.map`. Además, se incluirán utilidades de **texto** como `capitalize`, `toLowerCaseSafe` y `truncate`.

---

## 1) Estructura de carpetas

```txt
src/
├─ dto/
│  └─ Product.ts
├─ utils/
│  ├─ products.ts
│  └─ textUtils.ts
├─ components/
│  └─ ProductList.tsx
└─ index.tsx
```



---

## 2) DTO: Definición de interfaces (src/dto/Product.ts)

```ts
// src/dto/Product.ts

export interface Price {
  amount: number;
  currency: 'COP' | 'USD';
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  quantity: number;
  price: Price;
  isActive: boolean;
  specs?: {
    weightGr?: number;
    color?: string;
  };
}
```

---

## 3) Utils de productos (src/utils/products.ts)

```ts
// src/utils/products.ts
import type { Product } from '../dto/Product';

export const PRODUCTS: Product[] = [
  {
    id: 'p-001',
    name: 'wireless mouse pro',
    brand: 'acme',
    quantity: 35,
    price: { amount: 29_99, currency: 'USD' },
    isActive: true,
    specs: { color: 'gray' },
  },
  {
    id: 'p-002',
    name: 'mechanical keyboard tkl',
    brand: 'keyworld',
    quantity: 0,
    price: { amount: 89_99, currency: 'USD' },
    isActive: false,
  },
];
```

---

## 4) Utils de texto (src/utils/textUtils.ts)

Aquí se encuentran las funciones **capitalize**, **toLowerCaseSafe** y **truncate**, además de un formateador de precios.

```ts
// src/utils/textUtils.ts

// Capitaliza la primera letra de cada palabra
export function capitalize(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Convierte un texto a minúsculas de forma segura
export function toLowerCaseSafe(text: string | null | undefined): string {
  return text ? text.toLowerCase() : '';
}

// Recorta un texto si es demasiado largo y agrega "..."
export function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

// Formatea precios según su moneda
export function formatPrice(amount: number, currency: 'COP' | 'USD'): string {
  if (currency === 'COP') {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100);
}
```

---

## 5) Componente React que renderiza con `.map` (src/components/ProductList.tsx)

Este componente importa los productos y las utilidades de texto para mostrar los nombres capitalizados y las marcas en minúsculas.

```tsx
// src/components/ProductList.tsx
import type { Product } from '../dto/Product';
import { PRODUCTS } from '../utils/products';
import { capitalize, toLowerCaseSafe, truncate, formatPrice } from '../utils/textUtils';

export default function ProductList() {
  return (
   <div></div>
  );
}
```

---

## 6) Integración en App.tsx



---

## 7) Retos opcionales

1. Crear una función `titleCase` que capitalice cada palabra excepto las preposiciones.
2. Crear una función `slugify` para convertir nombres de producto en slugs para URLs.
3. Extraer `<li>` en un componente `<ProductItem>` con props tipadas.
4. Agregar un filtro de productos activos usando `useState`.

Con esto practicas **interfaces**, **imports/exports**, y utilidades de texto en React + TypeScript.

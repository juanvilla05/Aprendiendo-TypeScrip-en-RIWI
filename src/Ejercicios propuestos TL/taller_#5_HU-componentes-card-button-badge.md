# HU M1-S3: Creación de componentes reutilizables con React y TypeScript

## Objetivo
Construir tres componentes reutilizables —`Button`, `Badge` y `Card`— con **props bien tipadas en TypeScript**, y que se integren en una pequeña interfaz donde cada `Card` contenga al menos un `Badge`.

---

## Requerimientos

###  Componente **Button**
Debe representar un botón reutilizable para acciones en la aplicación.

**Props:**
- `variant?: "primary" | "secondary" | "outline" | "danger"` – define estilos de color (default: `"primary"`).  
- `size?: "sm" | "md" | "lg"` – define tamaños (default: `"md"`).  
- `disabled?: boolean` – deshabilita el botón (default: `false`).  
- `loading?: boolean` – muestra un estado de carga y bloquea clicks.  
- `onClick?: () => void` – acción al hacer clic.  
- `leftIcon?: React.ReactNode` – ícono opcional antes del texto.  
- `rightIcon?: React.ReactNode` – ícono opcional después del texto.  
- `text: string` – contenido/etiqueta del botón.

> El `Button` debe usarse en el ejemplo final, por ejemplo como un botón de acción en la `Card`.

---

###  Componente **Badge**
Debe mostrar una etiqueta visual que indique el estado o categoría de algo.

**Props:**
- `label: string` – texto del badge.  
- `status?: "success" | "warning" | "info" | "error" | "neutral"` – define color y estilo (default: `"neutral"`).  
- `icon?: React.ReactNode` – ícono opcional.  
- `title?: string` – texto para tooltip o accesibilidad.

> **Requisito clave:** cada `Card` debe mostrar al menos un `Badge` con un estado (por ejemplo “Disponible”, “Agotado”, “Nuevo”).

---

###  Componente **Card**
Tarjeta que agrupa información visual y permite incluir acciones.

**Props:**
- `title: string` – título principal.   
- `imageUrl?: string` – imagen opcional. 
- `type: green | white | black` 
- `footer?: React.ReactNode` – contenido para acciones, como botones.    

**Condiciones:**
- Implementar badge en la card.

---

## Criterios de aceptación
- [ ] Código en **React + TypeScript**, sin errores de tipado.  
- [ ] Cada `Card` muestra al menos un `Badge`.  
- [ ] Los tres componentes son **reutilizables**, con props bien definidas y documentadas.  
- [ ] Estilos consistentes y estructura limpia.  
- [ ] La aplicación final muestra un listado de `Card` con botones funcionales.  

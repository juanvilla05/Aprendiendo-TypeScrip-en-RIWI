# Clase: Programación Orientada a Objetos (POO) y Clases en TypeScript

## 1. Introducción a la POO

La **POO (Programación Orientada a Objetos)** es un paradigma de
programación que se basa en la idea de organizar el software en torno a
**objetos**, en lugar de funciones o procedimientos.\
Estos objetos son **instancias de clases**, que actúan como plantillas o
"planos" para crear dichos objetos.

La POO busca reflejar el mundo real, donde los objetos tienen
**características (propiedades)** y **comportamientos (métodos)**.

### Principios de la POO

-   **Encapsulamiento:** Agrupa datos y comportamientos en una clase y
    protege sus detalles internos.
-   **Herencia:** Permite crear nuevas clases basadas en otras,
    reutilizando y extendiendo su funcionalidad.
-   **Polimorfismo:** Un mismo comportamiento puede tener diferentes
    formas de ejecución.
-   **Abstracción:** Oculta los detalles innecesarios y muestra solo lo
    esencial.

------------------------------------------------------------------------

## 2. ¿Qué es una clase?

Una **clase** es una plantilla que define las **propiedades** y
**métodos** de un objeto.

### Ejemplo básico en TypeScript

``` typescript
class Coder {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const coder1 = new Coder("Ana", 25);
console.log(coder1.saludar());
// Salida: Hola, mi nombre es Ana y tengo 25 años.
```

------------------------------------------------------------------------

## 3. Propiedades vs Métodos

-   **Propiedades:** Son los datos que describen al objeto.\
    En el ejemplo, `nombre` y `edad` son propiedades de la clase
    `Coder`.
-   **Métodos:** Son funciones que definen acciones del objeto.\
    En el ejemplo, `saludar()` es un método de la clase `Coder`.

------------------------------------------------------------------------

## 4. Constructores en TypeScript

El **constructor** es un método especial que se ejecuta automáticamente
al crear una nueva instancia de la clase.\
Su propósito es inicializar las propiedades del objeto.

Ejemplo:

``` typescript
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```

------------------------------------------------------------------------

## 5. Herencia en TypeScript

La **herencia** permite crear nuevas clases basadas en otras,
reutilizando código y añadiendo nuevas características.

### Ejemplo de Herencia

``` typescript
class Estudiante extends Coder {
  grado: string;

  constructor(nombre: string, edad: number, grado: string) {
    super(nombre, edad);
    this.grado = grado;
  }

  mostrarGrado() {
    return `${this.nombre} está en el grado de ${this.grado}.`;
  }
}

const estudiante1 = new Estudiante("Carlos", 20, "Ingeniería");
console.log(estudiante1.saludar());
console.log(estudiante1.mostrarGrado());
```

En este ejemplo: - `Estudiante` **hereda** de `Coder`. - Añade la
propiedad `grado` y el método `mostrarGrado()`.

------------------------------------------------------------------------

## 6. Taller de Práctica

### Ejercicio 1: Clase Básica

Crea una clase `Animal` con las propiedades `nombre` y `edad`, y un
método `hacerSonido()` que imprima `"Sonido genérico"`.

### Ejercicio 2: Herencia

Crea una clase `Perro` que herede de `Animal` y sobrescriba el método
`hacerSonido()` para imprimir `"Guau Guau"`.\
Luego crea una instancia de `Perro` y prueba el método.

### Ejercicio 3: Polimorfismo

Crea una clase `Gato` que también herede de `Animal` y sobrescriba
`hacerSonido()` para imprimir `"Miau"`.

### Ejercicio 4: Abstracción

Piensa en un sistema de vehículos donde se oculte la lógica de arranque
del motor, mostrando solo un método `arrancar()`.

------------------------------------------------------------------------

## 7. Conclusión

-   La POO permite estructurar el código de forma clara y reutilizable.
-   **Clases** son plantillas para crear objetos con propiedades y
    métodos.
-   **Herencia** y **constructores** facilitan la extensión y
    reutilización del código.

---

## 8. Ejemplo práctico : **Login con POO en TypeScript**

En este ejemplo aplicamos **clases, propiedades, métodos, constructores, encapsulamiento y herencia** para modelar un flujo básico de autenticación.

### 8.1 Clase base `User`
- Define `email` y `password`.
- Implementa `login()` para validar credenciales.

```ts
class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  login(inputEmail: string, inputPassword: string): boolean {
    return this.email === inputEmail && this.password === inputPassword;
  }
}

// Uso:
const user = new User("ana@example.com", "123456");
console.log(user.login("ana@example.com", "123456")); // true
console.log(user.login("ana@example.com", "wrong"));  // false
```

### 8.2 Encapsulamiento de la contraseña (`private`)
- Protegemos el estado interno y exponemos solo el comportamiento.

```ts
class SecureUser {
  email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  login(inputEmail: string, inputPassword: string): boolean {
    return this.email === inputEmail && this.password === inputPassword;
  }
}

const secure = new SecureUser("juan@example.com", "pass123");
console.log(secure.login("juan@example.com", "pass123")); // true
// secure.password; // ❌ Error: 'password' es privada
```

### 8.3 Herencia: `Admin` extiende `User`
- Agrega `role` y un método de autorización.

```ts
class Admin extends User {
  role: string;

  constructor(email: string, password: string, role: string) {
    super(email, password);
    this.role = role;
  }

  hasPermission(): boolean {
    return this.role === "admin";
  }
}

const admin = new Admin("carlos@example.com", "admin123", "admin");
console.log(admin.login("carlos@example.com", "admin123")); // true
console.log(admin.hasPermission()); // true
```

### 8.4 (Opcional) Mini servicio en memoria
- Simula un "repositorio" de usuarios y una función de autenticación.

```ts
type Role = "user" | "admin";

class Account {
  readonly email: string;
  private password: string;
  role: Role;

  constructor(email: string, password: string, role: Role = "user") {
    this.email = email;
    this.password = password;
    this.role = role;
  }

  checkPassword(input: string): boolean {
    return this.password === input;
  }
}

class AuthService {
  constructor(private accounts: Account[]) {}

  authenticate(email: string, password: string): Account | null {
    const acc = this.accounts.find(a => a.email === email);
    if (acc && acc.checkPassword(password)) return acc;
    return null;
  }

  isAdmin(account: Account | null): boolean {
    return !!account && account.role === "admin";
  }
}

// Demo:
const db = [
  new Account("ana@example.com", "123456", "user"),
  new Account("carlos@example.com", "admin123", "admin"),
];

const auth = new AuthService(db);
const session = auth.authenticate("carlos@example.com", "admin123");
console.log("Login ok?", !!session);                // true
console.log("Es admin?", auth.isAdmin(session));    // true
```

### 8.5 Taller rápido (practicar con Login)
1. Añade validaciones: que el email tenga `@` y la contraseña mínimo 6 caracteres (lanza errores si no).
2. Implementa un método `changePassword(oldPass, newPass)` en `Account` que solo permita el cambio si `oldPass` coincide.
3. Extiende `AuthService` con `register(email, password, role)` evitando duplicados.
4. Implementa bloqueo de cuenta tras 3 intentos fallidos y un método `unlock()`.
5. (Plus) Reemplaza la comparación directa de contraseñas por un hash (ej. `crypto.subtle.digest` en navegador o `bcrypt` en Node) manteniendo la interfaz pública igual.
```

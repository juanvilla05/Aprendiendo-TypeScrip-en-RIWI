Crea un archivo jsx, nuestro index.tsx que contenga un botón con el atributo onClick que llame a una función llamada handleClick.

Crea  la función handleClick, que será llamada desde el  componente.

Dentro de handleClick, instancia una clase llamada UserService y llama a su método getUsers.

Crea un archivo services/users.ts donde definas la clase UserService.

Dentro de la clase UserService, agrega un atributo privado con la base URL del backend.

Define un método getUsers en la clase UserService que realice una petición HTTP al backend usando fetch.

Crea una ruta en /API  que tenga un handler para la ruta /users.

Haz que este handler del backend retorne un objeto JSON con una lista simulada de usuarios.
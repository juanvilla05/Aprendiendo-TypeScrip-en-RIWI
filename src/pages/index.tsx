// iniciamos el index haciendo todas impoprtaciones necesarias para la funcionalidad requerida ejemplo(hooks, funciones, interfaces, arrays, componentes)
// iniciamos importando hooks y componentes siempre con {}
import { useState } from "react";
import { useRouter } from "next/router";

//importranmos los arrays [] listas
import { users } from "@/utils/usuario";

// esta fubcion es el componente (Login)
export default function Login() {
  // le ponemos el nombre a la funcion relacionada con los que estmos creando
  // toda la logica va antes del return y dentro de la funcion como buena practica
  // Aqui vamos a crear la variable con la que vamos a controlar los estados y a utilizar el hook useState recuerda despues de const []
  const [usuario, setUsuario] = useState("pablo"); // se crea usuario y setUsuarios, para entender que uno tiene el valor con el que iniciamos y el otro recibe el ingresado en el input
  const [password, setPassword] = useState("jimenez");
  console.log(usuario);
  console.log(password);

  // creamos una funcion flecha como esta estructura para capturar el usuario y password del input
  const manejoUsuario =(evento: React.ChangeEvent<HTMLInputElement>)=> { // pedir explicacion de este tipado
    setUsuario(evento.target.value)    
  }
  const manejoPassword = (evento: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(evento.target.value)
  }
  // vamos a crear la variable con .find para buscar dentro del array los elementos que necesito comparar
  const validacion = ()=>{
    const usuarioEncontrado = users.find((persona)=> persona.name == usuario && persona.password == password)
    console.log(usuarioEncontrado)

    // trabajo en casa, condicional: (si, entonces)
    if (usuarioEncontrado) {
      alert (`Bienvenido ${usuarioEncontrado.name}`)
      // router es un hook, push es el metodo de ese hook 
      router.push("/dashboard"); // se crea una carpeta dashboard dentro de (pages) y luego un index dentro de esta, ahi es donde creamos la logica de la ruta, copn el snniper rfc e importamos el hook router
      }
      else{
        // si no
        alert('Usuario o contraseña invalidos');
      }
  }

  const router = useRouter(); // ahora creamos la variable para la ruta, recuerda que los hooks los llamamos con ()
  console.log(router);
  return (
    <>
      <h1> My app </h1>
      <h3> ingrese usuario y contraseña</h3>
      {/* //labeles para colocar un texto antes de un input */}
      <label> Ingresa tu usuario </label>
      <input type="text" onChange={manejoUsuario}/>
      <label> Ingrese contreseña</label>
      <input type="password" onChange={manejoPassword} />
      <button onClick={validacion}> Ingresar </button>
    </>
  );
}

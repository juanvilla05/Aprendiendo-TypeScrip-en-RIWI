// 1. ¿Qué es un formulario controlado? Un formulario controlado es aquel donde los valores de los inputs semanejan desde el estado del componente usando useState. Esto permite que React tenga el control total sobre los datos introducidos

//2. Tipado con TypeScript
//Definimos una interfaz para describir la estructura del formulario y así asegurar que los datos cumplan con el tipo esperado.

import React, {useState} from "react";

//Definimos el tipo de datos del formulario
interface FormData {
    nombre:string;
    email: string;
}
// Estado del formulario
const FormularioUsuario: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({nombre:'', email:''}) // useState<FormData>  nos permite definir que formData tendrá el tipo FormData

// Estado para manejar los errores
//errores es un arreglo de strings que almacenará los mensajes de validación.    

const [errores,setErrores] = useState<string[]> ([]);// [] para meter las respuesta string en arreglo
 
// Manejar los cambios del formulario
// Declaras una función llamada handleChange que recibe un evento de cambio
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, //El operador ...formData mantiene los demás valores del formulario sin perderlos.
      [e.target.name]: e.target.value, //ermite actualizar dinámicamente el campo (nombre o email). 
    });
  };






return (
    <div>
        <label>nombre</label>
      <input type="text" name="nombre" value={formData.nombre} />
    </div>
  )
}

export default FormularioUsuario

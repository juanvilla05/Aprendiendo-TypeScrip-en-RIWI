//Los servicios son funciones que consumen la api por medio de AXIOS para poder mostrar la informacion por medio del front 

import axios from 'axios'; 

// peticion GET leer, traer, conseguir, mostrar informacion - aqui vamos a pedir todos los propietarios
export const getProperties = async () => {

    const response = await axios.get('http://localhost:3000/api/properties');
    
    //console.log() como haria este clg

    return response.data // porque debe ir .data unos lo tienen otros no
}

//peticion GET Para pedir propietarios por ID
export const getPropertyByiD = async (id:string) => {  // buscar Propertybyid y cuales otros hay
    
    const response = await axios.get(`http://localhost:3000/api/properties?=${id}`)

    console.log(response.data)

    return response.data
}

//peticion POST, de CREATE Crear, hacer
export const createProperty = async(data:{name:string, value:number, img?:string})=>{ //validar si esta estructura es la que se saca del esquema como esta creado el objeto, en la base de datos

    const response = await axios.post('http://localhost:3000/api/properties',data)

    console.log(response)

    return response.data 
}
//peticion PUT, de UPDATE editar o modificar 
 export const updateProperty = async(id:string, data:{name:string, value:number, img?:string})=>{
    
    const response = await axios.put(`http://localhost:3000/api/properties?=${id}`,data) // este data es el nuevo cuerpo que toma en la edicion

    console.log(response)

    return response

 }

//peticion DELETE, para eliminar
export const deleteProperty =async(id:string)=>{

    const response = await axios.delete(`http://localhost:3000/api/properties?=${id}`)

    console.log(response)

    return response // recuerda que response solo, devuelve el status, el ok de la ejecucion de la tarea axioos indicada

}
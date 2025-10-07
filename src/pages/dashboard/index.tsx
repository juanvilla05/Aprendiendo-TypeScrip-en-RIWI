// creamos la estructura react con el snniper (rafc) o (rfc) y luego imoprtamos (useRouter)
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
//import { UserStore } from '@/utils/clase_UserStore';
import { ToastContainer } from 'react-toastify'
import {Card} from '@/componentes/card/card';
//import { type } from '../../../.next/types/routes';
//import Icon from '@/imagenes/Icon.png';
//import ilustracion from '@/imagenes/ilustracion.png'
import { MiButton } from '@/componentes/button/button';
import { dataProperties } from '../../dto/properties';
import { getProperties } from '@/services/properties';


const Dashboard = () => {
  const [dataProperties, setDataProperties] = useState({} as dataProperties);


  // al meterlo en el useEffect hace que se realice a la hora de cargar la pagina 
  useEffect(() => {
    const fetchData = async () => {
        const response = await getProperties();
        setDataProperties(response)
        
    }
    fetchData()
}, [])

  const router = useRouter(); // ahora creamos la variable para la ruta, recuerda que los hooks los llamamos con ()
  
  const gotoBack = () =>{
    router.back()
      
  }
  return (
    <div className='dashboard-container'>
    <h1 className='dashboard-title'>Dashboard</h1>
    <div className='card-container'>

    </div>
    <MiButton
    variant='primary'
    textButton='Ir Atras'
    click={gotoBack}
    size='lg'
    loading
    />
     <MiButton
    variant='secondary'
    textButton='Ejemplo pablo'
    size='sm'
    rightIcon='🐵'
    leftIcon='🦊'
    disable
    />
    
    <ToastContainer />
  </div>
  )
}
 export default Dashboard


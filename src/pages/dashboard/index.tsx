// creamos la estructura react con el snniper (rafc) o (rfc) y luego imoprtamos (useRouter)
import React from 'react'
import { useRouter } from "next/router";
//import { UserStore } from '@/utils/clase_UserStore';
import { ToastContainer } from 'react-toastify'
import {Card} from '@/componentes/card/card';
//import { type } from '../../../.next/types/routes';
//import Icon from '@/imagenes/Icon.png';
//import ilustracion from '@/imagenes/ilustracion.png'
import { MiButton } from '@/componentes/button/button';


const Dashboard = () => {
  const router = useRouter(); // ahora creamos la variable para la ruta, recuerda que los hooks los llamamos con ()
  
  const gotoBack = () =>{
    router.back()
      
  }
  return (
    <div className='dashboard-container'>
    <h1 className='dashboard-title'>Dashboard</h1>
    <div className='card-container'>
      <Card
        titulo="Email Marketing"
        footer="Learn More"
        imagenUrl='' // Reemplaza con la URL de tu imagen
        type="green"
      />
    </div>
    <MiButton
    variant='primary'
    text='Ir Atras'
    click={gotoBack}
    size='lg'
    loading
    />
     <MiButton
    variant='secondary'
    text='Ejemplo pablo'
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


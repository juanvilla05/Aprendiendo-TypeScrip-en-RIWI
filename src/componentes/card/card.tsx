
import Image from 'next/image';

import React from 'react'
import { MiButton, MiButtonProps } from '../button/button';
import MiBadge, { BadgeProps } from '../Badge/badge';

interface CardProps extends BadgeProps, MiButtonProps {
    titulo:string, // titulo principal
    imagenUrl?: React.ReactNode
    type: "green" | "white" | "black"
    footer?:string,
  }
// recordemos que los props siempre se pasan como parametros del componente, los destructuramos dentro de llaves
// los tipamos con el nombre de la interface que hemos creado
export const Card = ({titulo,imagenUrl,footer,type,label,status,titleBadge,icon,variant,size,disable,loading,click,leftIcon,rightIcon,textButton}:CardProps) => {
  
  return (
      <>
         <div className={`card card--${type}`}>
                <MiBadge
                    label={label}
                    status={status}
                    icon={icon}
                    titleBadge={titleBadge}
                />{titulo}
                {/* <Image
                    src= {imagenUrl}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                    /> */}
                <MiButton
                    textButton={textButton}
                    click={click}
                />
                {footer}
    </>
)
};



//El componente Badge mostrará una etiqueta con texto, color y opcionalmente un ícono.
//Cada Card incluirá al menos un Badge con un estado como "Nuevo", "Disponible", etc.
//Los estilos serán consistentes y reutilizables.
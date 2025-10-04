
import Image from 'next/image';

import React from 'react'
import { MiButton, MiButtonProps } from '../button/button';
import MiBadge, { BadgeProps } from '../Badge/badge';

interface CardProps extends BadgeProps, MiButtonProps {
    titulo:string, // titulo principal
    imagenUrl?: string,
    type: "green" | "white" | "black"
    footer?:string,

    funcion1:()=>void,
    funcion2:()=>void
  }
// recordemos que los props siempre se pasan como parametros del componente, los destructuramos dentro de llaves
// los tipamos con el nombre de la interface que hemos creado
export const Card = ({titulo,imagenUrl='',footer,type,label,status,titleBadge,icon,funcion1,funcion2}:CardProps) => {
  
  return (
      <>
    
         <div className={`card card--${type}`}>
                <MiBadge
                    label={label}
                    status={status}
                    icon={icon}
                    titleBadge={titleBadge}
                />{titulo}
                <Image
                src={imagenUrl}
                alt={titulo}
                />
                <MiButton
                    leftIcon ='⚙️'
                    textButton='Editar'
                    click={funcion1}
                />
                <MiButton
                leftIcon ='🛢️'
                textButton='Eliminar'
                click={funcion2}
                
                
                />
                {footer}
        </div>
    </>
)
};



//El componente Badge mostrará una etiqueta con texto, color y opcionalmente un ícono.
//Cada Card incluirá al menos un Badge con un estado como "Nuevo", "Disponible", etc.
//Los estilos serán consistentes y reutilizables.
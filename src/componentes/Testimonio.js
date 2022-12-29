
import React from 'react';
import '../hojas-de-estilo/testimonio.css';

export default function Testimonio(props) {



  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/${props.item.imagen}.jpeg`)}
        alt={`Foto de ${props.item.nombre}`} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.item.nombre}</strong> en {props.item.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.item.cargo} en <strong>{props.item.empresa}</strong>
        </p>
        <p className='texto-testimonio' dangerouslySetInnerHTML={{__html: props.item.testimonio}} ></p>

      </div>
    </div>
  );
}


import React from 'react'
import { Link } from 'react-router-dom'
import classes from './thumbnails.module.css' 
import Precio from '../Precio/Precio';

export default function Thumbnails( {comidas} ) {
  return (
    <ul className={classes.list}>
      { comidas.map(comida => (
        <li key={comida.id}> 
          <Link to={`/comida/${comida.id}`}>
            <img  className={classes.image}
                  src={`/img/${comida.imgUrl}`}
                  alt={comida.name}/>
          
          <div className={classes.content}>
            <div className={classes.name}>{comida.name}</div>
            <div className={classes.comida_footer}>
              <div className={classes.comida_origen}>{comida.category}: {comida.origin_name}</div>
              <div className={classes.tiempo_deliver}><span>🕒</span>{comida.delivery_time}</div>
              <div className={classes.precio}><Precio price={comida.price}/></div>
            </div>
          </div>
          </Link>
        </li>
        ))}
    </ul>
  );
}

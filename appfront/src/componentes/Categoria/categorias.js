import React from 'react';
import classes from './categorias.module.css';
import { Link } from 'react-router-dom';

export default function Categorias({ categorias}) {
  return (
    <div className={classes.container}>
      {
        categorias.map( categoria =>
          <Link key={categoria.name} to={`/categoria/${categoria.name}`}>
            {categoria.name}
          </Link>
         )
      }
    </div>
  )
}

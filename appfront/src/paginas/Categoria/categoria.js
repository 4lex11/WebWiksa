import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllBycategory } from '../../services/comidaservice';
import classes from './categoria.module.css'
import { vendedores } from '../../data';

const initialState = { vendedores:[] };

const reducer = (state,action) =>{
  switch(action.type){
    case 'VENDEDORES_CARGADO':
      return {...state, vendedores: action.payload};
    default:
      return state;
  }
}

export default function CategoriaPage({vendedores}) {

  /*const [categoria, setcategory] = useState({});
  const {name} = useParams();

  useEffect(()=>{
    getAllBycategory(name).then(setcategory);
  },[name]);*/

  return (
    <>
    A
    </>
  )
}

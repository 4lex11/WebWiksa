import React, { useEffect, useReducer } from 'react'
import { Allproductos , getAllcategorys ,getAllBycategory } from '../../services/comidaservice';
import Thumbnails from '../../componentes/Thumbnails/Thumbnails';
import Categorias from '../../componentes/Categoria/categorias';
import { useParams } from 'react-router-dom';

// * VARIABLES FUNNCIONES
const initialState = { comidas: [] , categorias:[]};

const reducer = (state, action) => {
  switch(action.type){
    case 'COMIDAS_CARGADA':
      return {...state, comidas: action.payload};

    case 'CATE_CARGADA':
      return {...state, categorias: action.payload};
    default:
      return state;
  }
};

export default function Inicio() {
// * VARIABLES FUNNCIONES
  const [state, dispatch] = useReducer(reducer, initialState);
  const { comidas , categorias } = state;
  const { categoria } = useParams();

  useEffect( () => {
    getAllcategorys().then(categorias => dispatch({type:'CATE_CARGADA',payload: categorias}));

    Allproductos().then(comidas => dispatch({ type:'COMIDAS_CARGADA', payload: comidas}));
  }, [categoria] );

// * PARTE DE HTML/JS
  return (
  <>
    <Categorias categorias={categorias}/>
    <Thumbnails comidas={comidas}/> 
  </>
  );
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllBycategory } from '../../services/comidaservice';
import classes from './categoria.module.css'

export default function CategoriaPage() {

  const [categoria, setcategory] = useState({});
  const {name} = useParams();

  useEffect(()=>{
    getAllBycategory(name).then(setcategory);
  },[name]);

  return (
    <>
    A
    </>
  )
}

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Inicio from './paginas/inicio/inicio';
import ProductoPage from './paginas/Producto/Producto';
import CategoriaPage from './paginas/Categoria/categoria';
import VendedorPage from './paginas/Vendedor/Vendedor';

export default function AppRoutes() {
  return (
  <Routes>
    <Route path="/" element={ <Inicio/>} />
    <Route path="/categoria/:name" element={<CategoriaPage/>}/>
    <Route path="/vendedor/:name" element={<VendedorPage/>}/>
    <Route path="/producto/:id" element={<ProductoPage/>}/>
  </Routes>
  );
}

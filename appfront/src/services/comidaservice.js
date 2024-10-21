import { categorias, productos, vendedores } from '../data';

export const Allproductos = async () => productos;

export const searh = async searhTerm =>
    productos.filter();

export const getAllcategorys = async () => categorias;

export const getAllvendedores = async () => vendedores;

export const getAllBycategory = async categoria =>{
    if(categoria ===  'All') return getAllvendedores();
    return vendedores.filter(item => item.category?.includes(categoria));
}

export const getById = async productoId => 
    productos.find(item => item.id === productoId);
import { categorias, productos, vendedores } from '../data';

// * LISTAR TODOS LOS PRODUCTOS
export const Allproductos = async () => productos;

export const searh = async searhTerm =>
    productos.filter();

// * LISTAR TODAS LAS CATEGORIAS
export const getAllcategorys = async () => categorias;

// * LISTAR TODOS LOS VENDEDORES
export const getAllvendedores = async () => vendedores;

// * FILTRAR POR CATEGORIA
export const getAllBycategory = async categoria =>{
    if(categoria ===  'All') return getAllvendedores();
    return vendedores.filter(item => item.category?.includes(categoria));
}

// * FILTRAR PRODUCTOS POR ID
export const getById = async productoId => 
    productos.find(item => item.id === productoId);
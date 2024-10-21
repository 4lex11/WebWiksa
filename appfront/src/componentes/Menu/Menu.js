import React from 'react'
import classes from './menu.module.css'
import { Link } from 'react-router-dom';

export default function Menu() {

  const user = {   name:'Administrador'  };
  const cart = {   canttotal: 10  };
  const logout = () => {};

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          WIKSA
        </Link>

        <div className={classes.buscardor}>
          <input type="text" placeholder="Buscar productos"/>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            </button>
        </div>

        <nav>
          <ul>
            {
              user? (
              <li className={classes.menu_container}>
                <Link to="/usuario">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/usuario">Perfil</Link>
                  <Link to="/pedidos">Pedidos</Link>
                  <a onClick={logout}>Cerrar sesión</a>
                </div>
              </li>):( 
              <Link to="/login">Iniciar sesión</Link>
            )}
            <li>
              <Link to="/carrito">Carrito {cart.canttotal > 0 && <span className={classes.cart_count}>{cart.canttotal}</span>}
              </Link>
            </li>

          </ul>
        </nav>

      </div>  
    
    </header>
  )
}
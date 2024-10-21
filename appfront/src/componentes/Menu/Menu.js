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
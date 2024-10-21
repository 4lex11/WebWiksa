import React from 'react'
import classes from './footer.module.css'

export default function Footer() {
  return (
    <>
    <footer>
        <div className={classes.footer_col}>
            <ul>
                <li><a href="#">¿Quienes somos?</a></li>
                <li><a href="#">Terminos y condiciones</a></li>
                <li><a href="#">Socios</a></li>
            </ul>
        </div>
        <div className={classes.footer_col}>
            <ul>
                <li><a href="#">Metodos de Pago</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
        </div>
        <div className={classes.footer_col}>
            <ul>
                <li><a href="#">Registra tu negocio</a></li>
            </ul>
        </div>
    </footer>
    <div className={classes.pie}>
        <p>WIKSA ©2024</p>
    </div>
    </>
  )
}

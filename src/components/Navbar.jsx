import React from 'react'
import "../components/Navbar.css"
import {NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <ul className='navBar'>
           <li>Inicio</li>
           <li>Servicios</li>
           <li>Acerca De</li>
           <li>Contactos</li>
        </ul>
    </div>
  )
}

export default Navbar
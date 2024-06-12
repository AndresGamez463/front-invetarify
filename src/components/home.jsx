// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  NavLink } from "react-router-dom";



const Home = () => {
    return (

        <div>
            <h1>INVENTARIFY</h1>
          <nav>
            <NavLink to="/ListaProducto">Productos</NavLink><br />
            <NavLink to="/CategoryList">Categorias</NavLink><br />
            <NavLink to="/ListaCliente">Clientes</NavLink><br />
            <NavLink to="/ListaProveedor">Proveedores</NavLink><br />
            <NavLink to="/ListaDepartamento">Departamentos</NavLink><br />
            <NavLink to="/ListaVenta">Ventas</NavLink><br />
            <NavLink to="/ListaFactura">Factura</NavLink><br />
            
          </nav>
        </div>


      );
}
 
export default Home ;

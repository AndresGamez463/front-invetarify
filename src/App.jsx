
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryList from './components/CategoryList';
import Home from './components/home';
import ListaCliente from './components/ListaCliente';
import ListaDepartamento from './components/ListaDepartamento';
import ListaFactura from './components/ListaFactura';
import ListaProducto from './components/ListaProducto';
import ListaProveedor from './components/ListaProveedor';
import ListaVenta from './components/ListaVenta';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
       

        <main>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/ListaProducto" element={<ListaProducto />} />
            <Route path="/CategoryList" element={<CategoryList />} />
            <Route path="/ListaDepartamento" element={<ListaDepartamento />} />
            <Route path="/ListaCliente" element={<ListaCliente />} />
            <Route path="/ListaFactura" element={<ListaFactura />} />
            <Route path="/ListaProveedor" element={<ListaProveedor />} />
            <Route path="/ListaVenta" element={<ListaVenta />} />
            <Route path="**" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

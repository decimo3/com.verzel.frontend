import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
  return (
    <header>
      <nav className="navbar bg-white border-bottom box-shadow mb-3">
        <div className="align-left">
          <Link to="/" className="navbar-brand">Decimo3 - Venda de carros</Link>
          <Link to="/" className="nav-item">Inicio</Link>
        </div>
        <div className="align-right">
          <Link to="/Login" className="navbar-brand">Login</Link>
          <Link to="/ListCarro" className="navbar-brand">Gerenciar</Link>
        </div>
      </nav>
    </header>
  );
}
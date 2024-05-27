import React from "react";
import { Link } from "react-router-dom";
import "../../styles/inicio.css"; // Asegúrate de importar el archivo CSS correcto

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/">
          <span className="mb-0 h1 tex">Suggestions</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btnlog btn-primary">Logout</button>
          </Link>
        </div>
      </div>
      <Link to="/private">
        <button className="create-post-btn">
          <i className="fas fa-dog"></i> Create Post
        </button>
      </Link>
    </nav>
  );
};

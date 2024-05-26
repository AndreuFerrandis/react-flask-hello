import React from "react";
import MyCard from "../pages/Cards.jsx";
import "../../styles/inicio.css"; // Asegúrate de importar el archivo CSS correcto
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";


export const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="content">
        <h1 className="inicio-title">DogMeet</h1>
        <MyCard
          username={"Name usuario"}
          img={"https://st.depositphotos.com/28578506/53990/i/450/depositphotos_539903784-stock-photo-black-wolf-black-background.jpg"}
          bodytext={"Insert coment here"}
        />
      </div>
    </div>
  );
};

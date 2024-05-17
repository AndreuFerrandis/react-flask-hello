import React from "react";
import MyCard from "../pages/Cards.jsx";


export const Inicio = () => {
	

	return (
		<div className="text-center mt-5">
			<h1>Inicio</h1>
			<MyCard 
			username={"Londres"}
			img= {"https://images.pexels.com/photos/18338026/pexels-photo-18338026/free-photo-of-ciudad-punto-de-referencia-edificio-puente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
			bodytext={"bendita la luzzzz uuuu bendita la luz de tu mirada"}
			/>

		</div>
	);
};
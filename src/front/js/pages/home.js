import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {

	return (
		<div className="text-center">
			<div>
				<h1 style={{ position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)", color:"white"}}> Dog Meet</h1>
				<img src="https://images.pexels.com/photos/2027105/pexels-photo-2027105.jpeg" 
					style={{ width: "100vw", height: "100vh", objectFit: "cover" }}/>
			</div>

			<div className="buttons">
				<Link to={"/signup"}>
					<button className="btn btn-success">Sign Up</button>
				</Link>
				<div className="separator">/</div>
				<Link to={"/login"}>
					<button className="btn btn-success">LogIn</button>
				</Link>
			</div>
			
		</div>
	);
};


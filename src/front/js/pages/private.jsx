import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/private.css";


export const Private = () => {
	const { store, actions } = useContext(Context);
	const [img, setImg] = useState("");
	const [bodytext, setBodytext] = useState("")

	const handleSubmit = e => {
		e.preventDefault();
		actions.createPost(img, bodytext);
		setImg(" ");
		setBodytext(" ");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="Content-img">
				<label>
					Photo
					{img && <img src={img} alt="Uploaded" style={{ width: "300px", height: "300px" }} />}
					<input
						type="text"
						name="img"
						value={img}
						onChange={e => setImg(e.target.value)}
					/>

				</label>
			</div>

			<div>
				<label>
					Body-Text
					<input
						type="text"
						name="bodytext"
						value={bodytext}
						onChange={e => setBodytext(e.target.value)}
					/>
				</label>
			</div>
			<button type="submit">Enviar</button>
		</form>
	);
};
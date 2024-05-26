import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/private.css";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const [img, setImg] = useState("");
	const [bodytext, setBodytext] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		actions.createPost(img, bodytext);
		setImg("");
		setBodytext("");
	};

	return (
		<form className="post-form" onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="form-label">Insert URL</label>
				<input
					type="text"
					name="img"
					value={img}
					onChange={e => setImg(e.target.value)}
					className="form-input"
				/>
			</div>

			<div className="form-group">
				<label className="form-label">Comment</label>
				<input
					type="text"
					name="bodytext"
					value={bodytext}
					onChange={e => setBodytext(e.target.value)}
					className="form-input"
				/>
			</div>

			{img && (
				<div className="image-preview">
					<img src={img} alt="Uploaded" className="preview-img" />
				</div>
			)}

			<div className="button-container">
				<button type="submit" className="submit-button">Send Post</button>
			</div>
		</form>
	);
};

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3" style={{}}>

			<div className="ms-5" style={{ fontFamily: 'StarJedi', fontSize: "36px", color: "#FFD700" }}>
				STAR WARS
			</div>
			<div className="ml-auto">
					<button className="btn btn-warning me-5">Favorites</button>
			</div>
		</nav>
	);
};


import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3" style={{}}>

			<div className="ms-5" style={{ fontFamily: 'Star Wars', fontFamily: "SF Distant Galaxy AltOutline", fontSize: "48px", color: "#FFD700" }}>
				STAR WARS
			</div>
			<div className="ml-auto m-2">
			<button type="button" class="btn" data-bs-toggle="button" style={{ fontFamily: 'Star Wars', fontFamily: "SF Distant Galaxy Outline", fontSize: "32px", color: "#FFD700" }} >Favourites</button>
			</div>
		</nav>
	);
};


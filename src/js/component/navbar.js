import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context)
	return (
		<nav className="navbar mb-3" style={{}}>

			<Link to="/" style={{textDecoration: "none"}}>
				<div className="ms-5" style={{ fontFamily: 'Star Wars', fontFamily: "SF Distant Galaxy AltOutline", fontSize: "48px", color: "#FFD700" }}>
					STAR WARS
				</div>
			</Link>
			<div className="ml-auto m-2">
				{/* <button type="button" className="btn" data-bs-toggle="button" style={{ fontFamily: 'Star Wars', fontFamily: "SF Distant Galaxy Outline", fontSize: "32px", color: "#FFD700" }} >Favourites</button> */}
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: 'Star Wars', fontFamily: "SF Distant Galaxy Outline", fontSize: "32px", color: "#FFD700" }}>
						favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.myfavorite.map((item, index) => (
							<li key={index} >
								<a className="dropdown-item" href="#">

									{item} 
									<button onClick={() => actions.favoritos(item)} className="btn btn-outline-danger float-end" >
										<i className="fa fa-trash"></i>
									</button>

								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};


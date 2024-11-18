import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.obtenerInfoPlaneta(theid)
	}, [])

	return (
		<div className="container d-flex justify-content-center py-5">
			<div className="card shadow-lg mb-3" style={{width: "100%", maxWidth: "900px", borderRadius: "20px", background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))"}}>
				<div className="row g-0">
					<div className="col-md-6">
						<img 
							src={"https://starwars-visualguide.com/assets/img/planets/" + theid + ".jpg"} className="img-fluid rounded-start" alt={store.planet?.properties?.name} style={{objectFit: "cover", height: "100%"}}
						/>
					</div>

					<div className="col-md-6">
						<div className="card-body text-white">

							<h5 className="card-title" style={{ fontFamily: "SF Distant Galaxy", fontSize: "28px", color: "#f1c40f" }}>
								{store.planet?.properties?.name}
							</h5>

							<p className="card-text" style={{ fontSize: "18px", fontStyle: "italic" }}>
								<i>{store.planet?.description}</i>
							</p>

							<hr className="border-light" />
							<div className="card-text">
								<p><strong>Climate:</strong> {store.planet?.properties?.climate}</p>
								<p><strong>Created:</strong> {store.planet?.properties?.created}</p>
								<p><strong>Diameter:</strong> {store.planet?.properties?.diameter}</p>
								<p><strong>Gravity:</strong> {store.planet?.properties?.gravity}</p>
								<p><strong>Population:</strong> {store.planet?.properties?.population}</p>
								<p><strong>Terrain:</strong> {store.planet?.properties?.terrain}</p>
							</div>

							<Link to="/" className="btn btn-warning mt-3" style={{borderRadius: "50px", padding: "10px 20px", transition: "background-color 0.3s"}}>
								<i className="fa fa-arrow-left"></i>
							</Link>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};

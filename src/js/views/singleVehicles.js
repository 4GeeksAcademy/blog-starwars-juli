import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicles = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.obtenerInfoVehicles(theid)
	}, [])

	return (
		<div className="container d-flex justify-content-center">
			<div className="card mb-3" style={{width: "900px"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + theid + ".jpg"} className="img-fluid rounded-start" alt={store.vehicle?.properties?.name}/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.vehicle?.properties?.name} : {store.vehicle.description} </h5>
							{/* <p className="card-text">Birth year: {store.person?.properties?.birth_year}</p>
							<p className="card-text">Eye color: {store.person?.properties?.eye_color}</p>
							<p className="card-text">Gender: {store.person?.properties?.gender}</p>
							<p className="card-text">Hair color: {store.person?.properties?.hair_color}</p>
							<p className="card-text">Height: {store.person?.properties?.height}</p>
							<p className="card-text">Mass: {store.person?.properties?.mass}</p>
							<p className="card-text">Skin color: {store.person?.properties?.skin_color}</p>
							<p className="card-text"><small className="text-body-secondary">{store.person?.properties?.edited}</small></p> */}
						</div>
					</div>
				
				</div>
			</div>
		</div>
	);
};

SingleVehicles.propTypes = {
	match: PropTypes.object
};
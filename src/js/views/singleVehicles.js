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
        <div className="container d-flex justify-content-center py-5">
            <div className="card shadow-lg mb-3" style={{ width: "100%", maxWidth: "900px", borderRadius: "20px", background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))" }}>
                <div className="row g-0">
                    
                    <div className="col-md-6">
                        <img 
                            src={"https://starwars-visualguide.com/assets/img/vehicles/" + theid + ".jpg"} className="img-fluid rounded-start" alt={store.vehicle?.properties?.name} style={{ objectFit: "cover", height: "100%" }}
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body text-white">
                            <h5 className="card-title" style={{ fontFamily: "SF Distant Galaxy", fontSize: "28px", color: "#f1c40f" }}>
                                {store.vehicle?.properties?.name}
                            </h5>

                            <p className="card-text" style={{ fontSize: "18px", fontStyle: "italic" }}>
                                <i>{store.vehicle?.description}</i>
                            </p>

                            <hr className="border-light" />
                            <div className="card-text">
                                <p><strong>Cargo Capacity:</strong> {store.vehicle?.properties?.cargo_capacity}</p>
                                <p><strong>Consumables:</strong> {store.vehicle?.properties?.consumables}</p>
                                <p><strong>Cost In Credits:</strong> {store.vehicle?.properties?.cost_in_credits}</p>
                                <p><strong>Created:</strong> {store.vehicle?.properties?.created}</p>
                                <p><strong>Crew:</strong> {store.vehicle?.properties?.crew}</p>
                                <p><strong>Length:</strong> {store.vehicle?.properties?.length}</p>
                                <p><strong>Manufacturer:</strong> {store.vehicle?.properties?.manufacturer}</p>
                                <p><strong>Max Atmospheric Speed:</strong> {store.vehicle?.properties?.max_atmosphering_speed}</p>
                                <p><strong>Model:</strong> {store.vehicle?.properties?.model}</p>
                                <p><strong>Passengers:</strong> {store.vehicle?.properties?.passengers}</p>
                                <p><strong>Vehicle Class:</strong> {store.vehicle?.properties?.vehicle_class}</p>
                                <p><small className="text-body-secondary">{store.vehicle?.properties?.edited}</small></p>
                            </div>

                            <Link to="/" className="btn btn-warning mt-3" style={{ borderRadius: "50px", padding: "10px 20px", transition: "background-color 0.3s" }}>
                                <i className="fa fa-arrow-left"></i> 
                            </Link>

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

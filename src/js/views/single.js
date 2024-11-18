import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();
    useEffect(() => {
        actions.obtenerInfoPersonaje(theid)
    }, [])

    return (
        <div className="container d-flex justify-content-center py-5">
            <div className="card shadow-lg mb-3" style={{ width: "100%", maxWidth: "900px", borderRadius: "20px", background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))" }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img 
                            src={"https://starwars-visualguide.com/assets/img/characters/" + theid + ".jpg"} className="img-fluid rounded-start" alt={store.person?.properties?.name} style={{ objectFit: "cover", height: "100%", transition: "transform 0.5s ease-in-out" }}
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body text-white">
                            <h5 className="card-title" style={{ fontFamily: "SF Distant Galaxy", fontSize: "28px", color: "#f1c40f" }}>
                                {store.person?.properties?.name}
                            </h5>

                            <p className="card-text" style={{ fontSize: "18px", fontStyle: "italic" }}>
                                <i>{store.person?.description}</i>
                            </p>

                            <hr className="border-light" />
                            <div className="card-text">
                                <p><strong>Birth Year:</strong> {store.person?.properties?.birth_year}</p>
                                <p><strong>Eye Color:</strong> {store.person?.properties?.eye_color}</p>
                                <p><strong>Gender:</strong> {store.person?.properties?.gender}</p>
                                <p><strong>Hair Color:</strong> {store.person?.properties?.hair_color}</p>
                                <p><strong>Height:</strong> {store.person?.properties?.height}</p>
                                <p><strong>Mass:</strong> {store.person?.properties?.mass}</p>
                                <p><strong>Skin Color:</strong> {store.person?.properties?.skin_color}</p>
                                <p><small className="text-body-secondary">{store.person?.properties?.edited}</small></p>
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

Single.propTypes = {
    match: PropTypes.object
};

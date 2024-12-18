import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardVehicles = (props) => {
    const { actions, store } = useContext(Context)
    const isFavorites = store.myfavorite.includes(props.name)

    return (
        <div className="card" style={{ color: "white", background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))", fontFamily: "SF Distant Galaxy", fontSize: "20px", width: "18rem", flex: "none", margin: "10px" }}>
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {props.name}
                </h5>
                <Link to={"/singleVehicle/" + props.uid}>
                    <button className="btn btn-outline-dark float-start">Learn More</button>

                </Link>

                <button onClick={() => actions.favoritos(props.name)} className="btn btn-outline-warning float-end">
                    <i className={`fa fa-heart ${isFavorites ? "text-light" : "text-warning"}`}></i>
                </button>
            </div> 
        </div>
    )
}
export default CardVehicles

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = (props) => {
    const { actions, store } = useContext(Context)
    const isFavorites = store.myfavorite.includes(props.name)

    return (
        <div className="card m-3 d-flex justify-content-center" style={{ fontFamily: "SF Distant Galaxy", fontSize: "20px", width: "18rem", flex: "none", margin: "10", display: "flex", flexWrap: "wrap", float: "left" }}>
            <img src={props.uid == 1 ?
                "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                : "https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg"}
                className="card-img-top" alt={props.name}
            />

            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>

                <Link to={"/singlePlanet/" + props.uid}>
                    <button className="btn btn-outline-dark float-start">Learn More</button>

                </Link>

                <button onClick={() => actions.favoritos(props.name)} className="btn btn-outline-warning float-end">
                    <i className={`fa fa-heart ${isFavorites ? "text-dark" : "text-warning"}`}></i>
                </button>

            </div>

        </div>
    )
}

export default CardPlanets
import React from "react";

const Card = (props) => {
    
    return (
        <div className="card m-3 d-flex justify-content-center" style={{ fontFamily: "SF Distant Galaxy", fontSize: "20px", width: "18rem", flex: "none", margin: "10", display: "flex", flexWrap: "wrap", float: "left"}}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.uid + ".jpg"}
                className="card-img-top" alt={props.name}  
            />

            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
            </div>
            
        </div>
    )
}

export default Card
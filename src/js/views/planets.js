import React, { useEffect,useState,useContext } from "react";
import {Context} from "../store/appContext"
import CardPlanets from "../component/cardPLanets";

const Planets = () => {
    const {actions,store} = useContext (Context)

    useEffect(() => { 
    actions.obtenerPlanetas ()

    }, [])
    return (
        <div>
            <h1 className="mt-4" style={{ fontFamily: 'Star Wars', fontSize: "34px", color: "#FFD700" }}>Planets</h1>
            <div className="d-flex flex-row overflow-scroll">
            {
                store.planets.map((item, index) => {
                    return (
                        <CardPlanets key={index} name={item.name} uid={item.uid}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Planets
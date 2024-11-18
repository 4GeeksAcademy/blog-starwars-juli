import React, { useEffect,useState,useContext } from "react";
import {Context} from "../store/appContext"
import CardVehicles from "../component/cardVehicles";

const Vehicles = () => {
    const {actions,store} = useContext (Context)

    useEffect(() => {
       
    actions.obtenerVehicles ()

    }, [])
    return (
        <div>
            <h1 className="mt-4" style={{ fontFamily: 'Star Wars', fontSize: "34px", color: "#FFD700" }}>Vehicles</h1>
            <div className="d-flex flex-row overflow-scroll">
            {
                store.vehicles.map((item, index) => {
                    return (
                        <CardVehicles key={index} name={item.name} uid={item.uid}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Vehicles
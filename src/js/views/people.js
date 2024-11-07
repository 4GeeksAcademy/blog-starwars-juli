import React, { useEffect,useState,useContext } from "react";
import Card from "../component/card";
import {Context} from "../store/appContext"

const People = () => {
    const {actions,store} = useContext (Context)

    useEffect(() => {
       
    actions.obtenerPersonajes ()

    }, [])
    return (
        <div>
            <h1 className="mt-4" style={{ fontFamily: 'Star Wars', fontSize: "34px", color: "#FFD700" }}>Characters</h1>
            <div className="d-flex flex-row overflow-scroll">
            {
                store.people.map((item, index) => {
                    return (
                        <Card key={index} name={item.name} uid={item.uid}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default People
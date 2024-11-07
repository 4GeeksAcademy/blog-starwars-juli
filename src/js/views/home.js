import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import People from "./people";
import Planets from "./planets";

export const Home = () => {

	return <div className="text-center mt-5">
		<h1 className="title" style={{ fontFamily: 'Star Wars', fontFamily: "SF Distant Galaxy Outline", fontSize: "34px", color: "#FFD700" }}>APi</h1>
		<People/>
		<Planets/>
	</div>
};

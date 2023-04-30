import React from "react";
import "./list.css";

const LOCATIONS = [
	{
		name: "Los Angeles",
		address: `55°31'24.0"N 9°11'50.0"E`,
		coordinates: [-118.2437, 34.0522],
	},
	{
		name: "UK London",
		address: `55°31'24.0"N 9°11'50.0"E`,
		coordinates: [-0.116773, 51.510357],
	},
	{
		name: "Los Angeles",
		address: `55°31'24.0"N 9°11'50.0"E`,
		coordinates: [-118.2437, 34.0522],
	},
	{
		name: "UK London",
		address: `55°31'24.0"N 9°11'50.0"E`,
		coordinates: [-0.116773, 51.510357],
	},
	{
		name: "Los Angeles",
		address: `55°31'24.0"N 9°11'50.0"E`,
		coordinates: [-118.2437, 34.0522],
	},
	{
		name: "UK London",
		address: `55°31'24.0"N 9°11'50.0"E`,
		coordinates: [-0.116773, 51.510357],
	},
];

export default function ListPlaces() {
	return (
		<div style={{ position: "absolute", left: "10px", top: "10px" }}>
			{LOCATIONS.map((location) => (
				<div key={location.name} style={{ marginBottom: "10px" }}>
					<div className="yeezy-text">{location.name}</div>
					<div className="yeezy-text">{location.address}</div>
				</div>
			))}
		</div>
	);
}

import React from "react";
import "./list.css";

import Map from "./Map";

const LOCATIONS = [
	{
		place: "atlanta",
		address: `33.75550° N 84.40115° W`,
		date: "4 30 23",
		time: "4 6 pm",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "new york city",
		address: `40.716066° N -73.987685° W`,
		date: "5 1 23",
		time: "4 6 pm",
		coordinates: [-0.116773, 51.510357],
	},
	{
		place: "washington dc",
		address: `38.903808° N, -76.9969° W`,
		date: "5 3 23",
		time: "4 6 pm",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "paris",
		address: `48°52'09.8"N 2°20131.5"E`,
		date: "5 5 23",
		time: "4 6 pm",
		coordinates: [-0.116773, 51.510357],
	},
	{
		place: "london",
		address: `51°31'24.0"N 0°04'31.3"W`,
		date: "5 8 23",
		time: "4 6 pm",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "milan",
		address: `45°27'59.1"N 9°11'50.0"E`,
		date: "5 12 23",
		time: "4 6 pm",
		coordinates: [-0.116773, 51.510357],
	},
	{
		place: "rome",
		address: `41°53'56.1"N 12°28'23.2"E`,
		date: "5 14 23",
		time: "4 6 pm",
		coordinates: [-0.116773, 51.510357],
	},
];

export default function ListPlaces() {
	return (
		<div style={{ position: "absolute", left: "20px", top: "120px" }}>
			<div className="yeezy-text">yzy</div>
			<div className="yeezy-text">casting</div>
			<div className="yeezy-text">beings</div>
			<div className="yeezy-text">with</div>
			<div className="yeezy-text">shaved</div>
			<div style={{ marginBottom: "120px" }} className="yeezy-text">
				heads
			</div>
			{LOCATIONS.map((location) => (
				<div key={location.name} style={{ marginBottom: "120px" }}>
					<div className="yeezy-text">{location.place}</div>
					<div className="yeezy-text">{location.date}</div>
					<div className="yeezy-text">{location.time}</div>
					<div className="yeezy-text">{location.address}</div>
				</div>
			))}
		</div>
	);
}

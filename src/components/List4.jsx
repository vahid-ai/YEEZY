import React from "react";
import "./list.css";

const LOCATIONS = [
	{
		place: "atlanta",
		address: `33.75550° N 84.40115° W`,
		date: "4 30 23",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "new york city",
		address: `40.716066° N -73.987685° W`,
		date: "4 30 23",
		coordinates: [-0.116773, 51.510357],
	},
	{
		place: "washington dc",
		address: `38.903808° N, -76.9969° W`,
		date: "4 30 23",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "paris",
		address: `48°52'09.8"N 2°20131.5"E`,
		date: "4 30 23",
		coordinates: [-0.116773, 51.510357],
	},
	{
		place: "london",
		address: `51°31'24.0"N 0°04'31.3"W`,
		date: "4 30 23",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "milan",
		address: `45°27'59.1"N 9°11'50.0"E`,
		date: "4 30 23",
		coordinates: [-0.116773, 51.510357],
	},
];

export default function ListPlaces4() {
	return (
		<div style={{ position: "absolute", left: "20px", top: "30px" }}>
			{LOCATIONS.map((location) => (
				<div key={location.name} style={{ marginBottom: "50px" }}>
					<div className="yeezy-text4">yzy</div>
					<div className="yeezy-text4">casting</div>
					<div className="yeezy-text4">part 4 4</div>
					<div className="yeezy-text4">beings</div>
					<div className="yeezy-text4">with</div>
					<div className="yeezy-text4">shaved</div>
					<div className="yeezy-text4">heads</div>
					<div className="yeezy-text4">{location.place}</div>
					<div className="yeezy-text4">{location.date}</div>
					<div className="yeezy-text4">{location.time}</div>
					<div className="yeezy-text4">{location.address}</div>
				</div>
			))}
		</div>
	);
}

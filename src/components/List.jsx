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
	{
		place: "rome",
		address: `41°53'56.1"N 12°28'23.2"E`,
		date: "5 14 23",
		coordinates: [-0.116773, 51.510357],
	},
];

const testing = [
	[
		`yzy
casting
atlanta
4 30 23
33.75550° N 84.40115° W`,
	],

	[
		`yzy
casting
new york city
5 1 23
40.716066° N -73.987685° W`,
	],

	[
		`yzy
casting
washington dc
5 3 23
38.903808° N, -76.9969° W`,
	],

	[
		`yzy
casting
paris
5 3 23
48°52'09.8"N 2°20131.5"E`,
	],

	[
		`yzy
casting
london
5 8 23
51°31'24.0"N 0°04'31.3"W`,
	],

	[
		`yzy
casting
milan
5 12 23
45°27'59.1"N 9°11'50.0"E`,
	],

	[
		`yzy
casting
rome
5 14 23
41°53'56.1"N 12°28'23.2"E`,
	],

	[
		`yzy
casting
shanghai
5 16 23
33.75550° N, 84.40115° W`,
	],

	[
		`yzy
casting
tokyo
5 18 23
33.75550° N, 84.40115° W`,
	],
];

// const output = testing.split(" ");
// console.log({ output });

// for (let i = 0; i < output.length; i += 3) {
// 	console.log(output[i]);
// }
export default function ListPlaces() {
	return (
		<div style={{ position: "absolute", left: "10px", top: "10px" }}>
			{LOCATIONS.map((location) => (
				<div key={location.name} style={{ marginBottom: "50px" }}>
					<div className="yeezy-text">yzy</div>
					<div className="yeezy-text">casting</div>
					<div className="yeezy-text">{location.place}</div>
					<div className="yeezy-text">{location.date}</div>
					<div className="yeezy-text">{location.address}</div>
				</div>
			))}
		</div>
	);
}

// export default function ListPlaces() {
// 	return (
// 		<div>
// 			{testing.map((locationGroup, index) => {
// 				// const tmp = locationGroup.replace(/ /g, "\n");
// 				let tmp = locationGroup[0].split(" ");
// 				return (
// 					<div key={index}>
// 						{tmp.map((location, innerIndex) => (
// 							<div key={`${index}-${innerIndex}`}>{location}</div>
// 						))}
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }

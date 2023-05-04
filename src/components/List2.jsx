import React from "react";
import "./list.css";

import Map from "./Map";

const LOCATIONS = [
	{
		place: "Atlanta",
		address: `33.75550° N 84.40115° W`,
		date: "4 30 23",
		time: "4 6 pm",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "New York City",
		address: `40.716066° N -73.987685° W`,
		date: "5 1 23",
		time: "4 6 pm",
		coordinates: [-0.116773, 51.510357],
	},
	{
		place: "Washington DC",
		address: `38.903808° N, -76.9969° W`,
		date: "5 3 23",
		time: "4 6 pm",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "Paris",
		address: `48°52'09.8"N 2°20131.5"E`,
		date: "5 5 23",
		time: "4 6 pm",
		coordinates: [-0.116773, 51.510357],
	},
	{
		place: "London",
		address: `51°31'24.0"N 0°04'31.3"W`,
		date: "5 8 23",
		time: "4 6 pm",
		coordinates: [-118.2437, 34.0522],
	},
	{
		place: "Milan",
		address: `45°27'59.1"N 9°11'50.0"E`,
		date: "5 12 23",
		time: "4 6 pm",
		coordinates: [-0.116773, 51.510357],
	},
	{
		place: "Rome",
		address: `41°53'56.1"N 12°28'23.2"E`,
		date: "5 14 23",
		time: "4 6 pm",
		coordinates: [-0.116773, 51.510357],
	},
];

let pString = `
40.7399° N -73.9919° W
05 25 23
2 6 pm
#
42.3603° N -71.0677° W
05 26 23
2 6 pm
#
39.9502° N -75.1577° W
05 27 23
2 6 pm
#
38.9103° N -77.0415° W
05 28 23
2 6 pm
#
42.3351° N, -83.0441° W
05 30 23
2 6 pm
#
39.7690° N, -86.1563° W
05 31 23
2 6 pm
#
41.8786° N, -87.6275° W
06 01 23
2 6 pm
#
44.9776° N, -93.2639° W
06 03 23
2 6 pm
#
47.6047° N, -122.3330° W
06 05 23
2 6 pm
#
37.7874° N, -122.4017° W
06 07 23
2 6 pm
#
34.0458° N, -118.2404° W
06 08 23
2 6 pm
#
33.4497° N, -112.0748° W
06 09 23
2 6 pm
#
30.2671° N, -97.7427° W
06 11 23
2 6 pm
#
29.7595° N, -95.3643° W
06 10 23
2 6 pm
#
33.7553° N, -84.3895° W
06 12 23
2 6 pm
#
25.7666° N, -80.1936° W
06 14 23
2 6 pm
`;

let outStr = pString.split("#");
let newCoords2 = outStr.map((elm) => {
	let tmp = elm.split(/\r?\n/).slice(1, 4);
	return {
		address: tmp[0],
		date: tmp[1],
		time: tmp[2],
	};
});

const newCoords = [
	{
		address: "40.7399° N -73.9919° W",
		date: "05 25 23",
		time: "2 6 pm",
	},
	{
		address: "42.3603° N -71.0677° W",
		date: "05 26 23",
		time: "2 6 pm",
	},
	{
		address: "39.9502° N -75.1577° W",
		date: "05 27 23",
		time: "2 6 pm",
	},
	{
		address: "38.9103° N -77.0415° W",
		date: "05 28 23",
		time: "2 6 pm",
	},
	{
		address: "42.3351° N, -83.0441° W",
		date: "05 30 23",
		time: "2 6 pm",
	},
	{
		address: "39.7690° N, -86.1563° W",
		date: "05 31 23",
		time: "2 6 pm",
	},
	{
		address: "41.8786° N, -87.6275° W",
		date: "06 01 23",
		time: "2 6 pm",
	},
	{
		address: "44.9776° N, -93.2639° W",
		date: "06 03 23",
		time: "2 6 pm",
	},
	{
		address: "47.6047° N, -122.3330° W",
		date: "06 05 23",
		time: "2 6 pm",
	},
	{
		address: "37.7874° N, -122.4017° W",
		date: "06 07 23",
		time: "2 6 pm",
	},
	{
		address: "34.0458° N, -118.2404° W",
		date: "06 08 23",
		time: "2 6 pm",
	},
	{
		address: "33.4497° N, -112.0748° W",
		date: "06 09 23",
		time: "2 6 pm",
	},
	{
		address: "30.2671° N, -97.7427° W",
		date: "06 11 23",
		time: "2 6 pm",
	},
	{
		address: "",
		date: "29.7595° N, -95.3643° W",
		time: "06 10 23",
	},
	{
		address: "33.7553° N, -84.3895° W",
		date: "06 12 23",
		time: "2 6 pm",
	},
	{
		address: "25.7666° N, -80.1936° W",
		date: "06 14 23",
		time: "2 6 pm",
	},
];

export default function ListPlaces() {
	return (
		<div style={{ position: "absolute", left: "20px", top: "50px" }}>
			<div className="yeezy-text">yzy</div>
			<div className="yeezy-text">casting</div>
			<div className="yeezy-text">beings</div>
			<div className="yeezy-text">with</div>
			<div className="yeezy-text">shaved</div>
			<div style={{ marginBottom: "50px" }} className="yeezy-text">
				heads
			</div>
			{newCoords2.map((location) => (
				<div key={location.date} style={{ marginBottom: "50px" }}>
					<div className="yeezy-text">{location.address}</div>
					<div className="yeezy-text">{location.date}</div>
					<div className="yeezy-text">{location.time}</div>
				</div>
			))}
			{/* <div style={{ marginBottom: "50px" }}>
				{LOCATIONS.map((location) => (
					<div key={location.address} style={{ display: "flex", flexGrow: 1 }}>
						<div className="city">{location.place}</div>
						<div className="city">{location.address}</div>
					</div>
				))}
			</div> */}
		</div>
	);
}

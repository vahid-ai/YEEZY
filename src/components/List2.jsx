import React from "react";
import { sexagesimalToDecimal } from "geolib";

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
	let coords = tmp[0].split(",");
	return {
		address: tmp[0],
		longitude: coords[0],
		latitude: coords[1],
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

const links = [
	"https://maps.apple.com/?address=8%20W%2020th%20St,%20New%20York,%20NY%20%2010011,%20United%20States&ll=40.739900,-73.991900&q=8%20W%2020th%20St",

	"https://maps.apple.com/?ll=42.360315,-71.067700&q=Beacon%20Hill%20%E2%80%94%20Boston&spn=0.005342,0.008123&t=m",

	"https://maps.apple.com/?address=Thomas%20Jefferson%20University%20Hospital,%201015%20Chestnut%20St,%20Philadelphia,%20PA%20%2019107,%20United%20States&ll=39.950200,-75.157700&q=Thomas%20Jefferson%20University%20Hospital",

	"https://maps.apple.com/?address=1772%20Church%20St%20NW,%20Washington,%20DC%20%2020036,%20United%20States&ll=38.910300,-77.041500&q=1772%20Church%20St%20NW",

	"https://maps.apple.com/?address=400%E2%80%93414%20Macomb%20St,%20Detroit,%20MI%20%2048226,%20United%20States&ll=42.335100,-83.044100&q=400%E2%80%93414%20Macomb%20St",

	"https://maps.apple.com/?address=108%20N%20Pennsylvania%20St,%20Indianapolis,%20IN%20%2046204,%20United%20States&ll=39.769000,-86.156300&q=108%20N%20Pennsylvania%20St",

	"https://maps.apple.com/?address=DePaul%20University,%20247%20S%20State%20St,%20Chicago,%20IL%20%2060604,%20United%20States&ll=41.878600,-87.627500&q=DePaul%20University",

	"https://maps.apple.com/?address=323%20Fourth%20Ave%20S,%20Minneapolis,%20MN%20%2055415,%20United%20States&ll=44.977600,-93.263900&q=323%20Fourth%20Ave%20S",

	"https://maps.apple.com/?address=820%203rd%20Ave,%20Seattle,%20WA%20%2098104,%20United%20States&ll=47.604700,-122.333000&q=820%203rd%20Ave",

	"https://maps.apple.com/?address=138%E2%80%93158%20Jessie%20St,%20San%20Francisco,%20CA%20%2094105,%20United%20States&ll=37.787400,-122.401700&q=138%E2%80%93158%20Jessie%20St",

	"https://maps.apple.com/?address=310%20Crocker%20St,%20Los%20Angeles,%20CA%20%2090013,%20United%20States&ll=34.045800,-118.240400&q=310%20Crocker%20St",

	"https://maps.apple.com/?address=101%20N%201st%20Ave,%20Phoenix,%20AZ%20%2085003,%20United%20States&ll=33.449700,-112.074800&q=101%20N%201st%20Ave",
];

const latitude = 37.7749;
const longitude = -122.4194;
const label = "San Francisco";

function generateAppleMapsURL(latitude, longitude, label = "") {
	const urlBase = "https://maps.apple.com/";
	const queryParams = new URLSearchParams({
		ll: `${latitude},${longitude}`,
		q: label,
	});

	return `${urlBase}?${queryParams}`;
}

const appleMapsURL = generateAppleMapsURL(latitude, longitude, label);

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
			{newCoords2.map((location, index) => (
				<div key={location.date} style={{ marginBottom: "50px" }}>
					<a
						className="yeezy-text"
						href={links[index]}
						target="_blank"
						rel="noopener noreferrer"
					>
						{location.address}
					</a>
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

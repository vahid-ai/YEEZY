import StaticMap from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { IconLayer } from "@deck.gl/layers";

import darkMatter from "../mapboxStyles/darkMatter.json";
import carto_dark_matter_nolabels from "../mapboxStyles/carto_dark_matter_nolabels.json";

import yeezy_pin from "../assets/icons/yeezyLocationPin.svg";

const INITIAL_VIEW_STATE = {
	longitude: -100,
	latitude: 40,
	zoom: 1,
	maxZoom: 20,
	pitch: 0,
	bearing: 0,
};

const ICON_MAPPING = {
	marker: { x: 128, y: 0, width: 128, height: 128, mask: true },
};

const LOCATIONS = [
	{
		name: "Los Angeles",
		address: `55°31'24.0"N 9°11'50.0"E`,
		exits: 4214,
		coordinates: [-118.2437, 34.0522],
	},
	{
		name: "UK London",
		address: `55°31'24.0"N 9°11'50.0"E`,
		exits: 4214,
		coordinates: [-0.116773, 51.510357],
	},
];

const coordinatesList = [
	[-118.2437, 34.0522], // Los Angeles, California, USA
	[-73.9352, 40.7306], // New York City, New York, USA
	[-79.3832, 43.6532], // Toronto, Ontario, Canada
	[-97.7431, 30.2672], // Austin, Texas, USA
	[-87.6298, 41.8781], // Chicago, Illinois, USA
	[-123.1207, 49.2827], // Vancouver, British Columbia, Canada
	[-75.1652, 39.9526], // Philadelphia, Pennsylvania, USA
	[-89.4012, 43.0731], // Madison, Wisconsin, USA
	[-104.9903, 39.7392], // Denver, Colorado, USA
	[-116.5453, 33.8303], // Palm Springs, California, USA
];

const locationData = [
	{
		id: 1,
		name: "Location 1",
		longitude: -118.2437,
		latitude: 34.0522,
	},
	{
		id: 2,
		name: "Location 2",
		longitude: -73.9352,
		latitude: 40.7306,
	},
	{
		id: 3,
		name: "Location 3",
		longitude: -79.3832,
		latitude: 43.6532,
	},
	{
		id: 4,
		name: "Location 4",
		longitude: -97.7431,
		latitude: 30.2672,
	},
	{
		id: 5,
		name: "Location 5",
		longitude: -87.6298,
		latitude: 41.8781,
	},
	{
		id: 6,
		name: "Location 6",
		longitude: -123.1207,
		latitude: 49.2827,
	},
	{
		id: 7,
		name: "Location 7",
		longitude: -75.1652,
		latitude: 39.9526,
	},
	{
		id: 8,
		name: "Location 8",
		longitude: -89.4012,
		latitude: 43.0731,
	},
	{
		id: 9,
		name: "Location 9",
		longitude: -104.9903,
		latitude: 39.7392,
	},
	{
		id: 10,
		name: "Location 10",
		longitude: -116.5453,
		latitude: 33.8303,
	},
];

// const locationData = coordinatesList.map((coordinates, index) => ({
// 	id: index + 1,
// 	name: `Location ${index + 1}`,
// 	longitude: coordinates[0],
// 	latitude: coordinates[1],
// }));

const yeezyIconLayer = new IconLayer({
	id: "yeezy-icon-layer",
	data: LOCATIONS, // Your location data
	pickable: true,
	iconAtlas: yeezy_pin,
	iconMapping: {
		yeezyLocationPin: {
			x: 0,
			y: 0,
			width: 32,
			height: 32,
			mask: true,
		},
	},
	getPosition: (d) => [d.longitude, d.latitude],
	getIcon: (d) => "yeezyLocationPin",
	getSize: (d) => 5,
	getColor: (d) => [255, 140, 0],
	// getColor: (d) => [254, 0, 0],
	// getIconOffsets: (d) => [0, 128],
});

const sampleIcon = new IconLayer({
	id: "icon-layer",
	data: LOCATIONS,
	pickable: true,
	iconAtlas:
		"https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
	iconMapping: ICON_MAPPING,
	getIcon: (d) => "marker",
	sizeScale: 4,
	getPosition: (d) => d.coordinates,
	getSize: (d) => 5,
	// getColor: (d) => [229, 218, 183],
	// getColor: (d) => [231, 226, 191],
	getColor: (d) => [254, 0, 0], // red
	getPixelOffset: (d) => [0, -32],
});

export default function Map() {
	const layers = [sampleIcon];
	return (
		<DeckGL
			layers={layers}
			initialViewState={INITIAL_VIEW_STATE}
			controller={true}
			getTooltip={({ object }) =>
				object && {
					html: `<div>${object.name}</div><div>${object.address}</div>`,
					style: {
						color: "white",
						// color: "#e7e2bf",
						// color: "#FF0000",
						backgroundColor: "rgba(0, 0, 0)",
						borderColor: "#e7e2bf",
						"border-width": "100px",
						fontSize: "14.667px",
						padding: "20px 50px",
						borderRadius: "8px",
						"font-family": "CustomFontRoman",
					},
				}
			}
		>
			<StaticMap
				mapStyle={carto_dark_matter_nolabels}
				mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
			/>
		</DeckGL>
	);
}

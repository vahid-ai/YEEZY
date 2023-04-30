import "./App.css";
import "./fonts/FoundationSansBlackCdIt.otf";
import { Analytics } from "@vercel/analytics/react";

import Map from "./components/Map";
import ListPlaces from "./components/List";

function App() {
	return (
		<div>
			<ListPlaces />
			<Map />
			<Analytics />
		</div>
	);
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "./fonts/FoundationSansBlackCdIt.otf";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Map from "./components/Map";
import ListPlaces from "./components/List";
import ListPlaces2 from "./components/List2";
import ListPlaces3 from "./components/List3";
import ListPlaces4 from "./components/List4";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={ListPlaces} />
					<Route exact path="/alt" component={ListPlaces2} />
					<Route path="/map" component={Map} />
				</Switch>
			</Router>

			<Analytics />
		</>
	);
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "./fonts/FoundationSansBlackCdIt.otf";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Map from "./components/Map";
import ListPlaces from "./components/List";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={ListPlaces} />
					<Route path="/map" component={Map} />
				</Switch>
			</Router>

			<Analytics />
		</>
	);
}

export default App;

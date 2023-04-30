import "./App.css";
import "./fonts/FoundationSansBlackCdIt.otf";
import { Analytics } from "@vercel/analytics/react";

import Map from "./components/Map";

function App() {
	return (
		<>
			<Map />
			<Analytics />
		</>
	);
}

export default App;

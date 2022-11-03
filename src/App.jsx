import React, { useState } from "react";
import Switch from "react-switch";
import PriceCardContainer from "./components/PriceCardContainer";

const App = () => {
	const [showAnnual, setShowAnnual] = useState(false);
	return (
		<div id="app">
			<h1 className="app__header">Ready to get started?</h1>
			<p className="app__subtitle">Choose a plan tailored to your need</p>
			<div className="app__switchcontainer">
				<span>Monthly</span>
				<Switch
					handleDiameter={18}
					uncheckedIcon={false}
					checkedIcon={false}
					className="react-switch"
					id="material-switch"
					height={20}
					width={50}
					offColor="#CCCCCC"
					checked={showAnnual}
					onChange={() => setShowAnnual((prevState) => !prevState)}
				/>
				<span style={{ fontWeight: "bold" }}>Yearly</span>
			</div>
			<div className="container">
				<div className="row">
					<PriceCardContainer showAnnual={showAnnual} />
				</div>
			</div>
		</div>
	);
};

export default App;

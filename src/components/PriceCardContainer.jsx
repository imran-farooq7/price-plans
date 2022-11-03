import React from "react";
import PriceCard from "./PriceCard";

const PriceCardContainer = ({ showAnnual }) => {
	if (!showAnnual) {
		return (
			<>
				<PriceCard
					title="Lite"
					price="11"
					subtitle="Perfect to get started"
					plan="month"
				/>
				<PriceCard
					title="Pro"
					price="19"
					subtitle="Best for professionals"
					plan="month"
					fourItems
				/>
				<PriceCard
					title="Ultimate"
					price="35"
					subtitle="Toolset for hard players"
					plan="month"
					fourItems
					annual
				/>
			</>
		);
	}
	return (
		<>
			<PriceCard
				title="Lite"
				price="105"
				subtitle="Perfect to get started"
				plan="year"
			/>
			<PriceCard
				title="Pro"
				price="180"
				subtitle="Best for professionals"
				plan="year"
				fourItems
			/>
			<PriceCard
				title="Ultimate"
				price="336"
				subtitle="Toolset for hard players"
				plan="year"
				fourItems
				annual
			/>
		</>
	);
};

export default PriceCardContainer;

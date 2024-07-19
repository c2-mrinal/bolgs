import { MagicCard } from "@/animation/MagicCard";
import React from "react";
// import "./hooks.css";
const theme = "dark";
function HooksCard() {
	return (
		<MagicCard
			className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
			gradientColor={theme === "dark" ? "black" : "#D9D9D955"}
		>
			<div className="card-container">text</div>
		</MagicCard>
	);
}

export default HooksCard;

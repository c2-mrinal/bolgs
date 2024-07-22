// import { MagicCard } from "@/animation/MagicCard";
// import React from "react";
// const theme = "dark";
// function HooksCard() {
// 	return (
// 		<MagicCard
// 			className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
// 			gradientColor={theme === "dark" ? "black" : "#D9D9D955"}
// 		>
// 			<div className="card-container">text</div>
// 		</MagicCard>
// 	);
// }

// export default HooksCard;

import React from "react";

interface Details {
	version: string;
	usability: string;
	purpose: string;
	description: string[];
	uses: string[];
	versionRelease: string;
	internalWorking: string[];
	codeExample: {
		code: string;
		syntaxExplanation: string[];
	};
}

interface NodeDetailsCardProps {
	details: Details;
}

const HooksCard: React.FC<NodeDetailsCardProps> = ({ details }) => {
	details = {
		version: "16.8.0",
		usability: "most",
		purpose: "basic",
		description: [
			"useState is a Hook that allows you to add state variables to functional components.",
			"It returns an array with two elements: the current state and a function to update it.",
		],
		uses: ["Managing local state in functional components.", "Handling form input values."],
		versionRelease: "React 16.8.0",
		internalWorking: [
			"useState initializes the state variable with the provided initial value.",
			"It returns an array with two elements: the state variable and an updater function.",
			"The updater function can be called to change the state, causing the component to re-render.",
		],
		codeExample: {
			code: "const [count, setCount] = useState(0);",
			syntaxExplanation: [
				"const [count, setCount]: Destructures the array returned by useState.",
				"useState(0): Initializes the state variable 'count' with the value 0.",
				"setCount: Function to update the state variable 'count'.",
			],
		},
	};
	return (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto my-4">
			<p className="text-sm text-gray-600 dark:text-gray-400">
				<strong>Version:</strong> {details?.version}
			</p>

			<div className="mt-4">
				<h3 className="text-lg font-semibold">Description:</h3>
				<ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
					{details?.description.map((desc, index) => (
						<li key={index}>{desc}</li>
					))}
				</ul>
			</div>
			<div className="mt-4">
				<h3 className="text-lg font-semibold">Uses:</h3>
				<ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
					{details?.uses.map((use, index) => (
						<li key={index}>{use}</li>
					))}
				</ul>
			</div>
			<div className="mt-4">
				<h3 className="text-lg font-semibold">Internal Working:</h3>
				<ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
					{details?.internalWorking.map((work, index) => (
						<li key={index}>{work}</li>
					))}
				</ul>
			</div>
			<div className="mt-4">
				<h3 className="text-lg font-semibold">Code Example:</h3>
				<pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm text-gray-900 dark:text-gray-100">
					<code>{details?.codeExample.code}</code>
				</pre>
				<ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
					{details?.codeExample.syntaxExplanation.map((syntax, index) => (
						<li key={index}>{syntax}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HooksCard;

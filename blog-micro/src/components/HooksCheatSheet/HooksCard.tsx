import BoxReveal from "@/animation/BoxReveal";
import { MagicCard } from "@/animation/MagicCard";

import React,{useId, useLayoutEffect} from "react";

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
	details?: Details | null;
}

const HooksCard: React.FC<NodeDetailsCardProps> = ({ details }) => {
	let key = 1;
	useLayoutEffect(() => { 
		key = key++;
	 }, [details?.version]);
		const theme = "dark";
	return (
		<MagicCard
			className="cursor-pointer flex-col items-center justify-center shadow-l whitespace-nowrap "
			gradientColor={theme === "dark" ? "black" : "#D9D9D955"}
			key={key}
		>
			<div className=" dark:bg-gray-800 p-6 rounded-lg  max-w-xxl mx-auto my-4">
				<div className="mt-4">
					<div className="d-flex justify-between">
						<h3 className="text-lg font-semibold">Syntax</h3>
						<span className="text-sm text-gray-600 dark:text-gray-400">release version-{details?.version} </span>
					</div>
					<BoxReveal boxColor={"#5046e6"} duration={0.5}>
						<pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm text-gray-900 dark:text-gray-100">
							<code>{details?.codeExample?.code}</code>
						</pre>
					</BoxReveal>
				</div>
				<div className="mt-4">
					<h3 className="text-lg font-semibold">Description:</h3>
					<ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
						{details?.description?.map((desc, index) => (
							<li key={index}>{desc}</li>
						))}
					</ul>
				</div>
				<div className="mt-4">
					<h3 className="text-lg font-semibold">Uses:</h3>
					<ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
						{details?.uses?.map((use, index) => (
							<li key={index}>{use}</li>
						))}
					</ul>
				</div>
				<div className="mt-4">
					<h3 className="text-lg font-semibold">Internal Working:</h3>
					<ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
						{details?.internalWorking?.map((work, index) => (
							<li key={index}>{work}</li>
						))}
					</ul>
				</div>
				<div className="mt-4">
					<ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
						{details?.codeExample?.syntaxExplanation?.map((syntax, index) => (
							<li key={index}>{syntax}</li>
						))}
					</ul>
				</div>
			</div>
		</MagicCard>
	);
};

export default HooksCard;

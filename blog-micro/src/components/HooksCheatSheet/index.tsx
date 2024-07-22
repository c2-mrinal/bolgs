import React, { useState, ChangeEvent, useRef } from "react";
import ShineBorder from "@/animation/ShineBorder";
import { AnimatedBeam } from "@/animation/Beam";
import { filterList, filterData, nodes } from "@/data/hooksData";
import HooksCard from "./HooksCard";
interface FilterProps {
	filterFunc: (data: SelectedFilter) => void;
}

interface SelectedFilter {
	version: string;
	usability: string;
	purpose: string;
}

const Filter: React.FC<FilterProps> = ({ filterFunc }) => {
	const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
	const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>({
		version: "",
		usability: "",
		purpose: "",
	});

	const handleFilterClick = (filter: string) => {
		setExpandedFilter(expandedFilter === filter ? null : filter);
	};

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const data = {
			...selectedFilter,
			[expandedFilter!]: event.target.value,
		};
		setExpandedFilter(null);
		setSelectedFilter(data);
		filterFunc(data);
	};

	const selectDropDown = () => {
		const options = filterData[expandedFilter!];
		return (
			<div className="dropdown-container">
				<select onChange={handleSelectChange} value={selectedFilter[expandedFilter!]} defaultValue={expandedFilter!}>
					{options?.map((val) => (
						<option key={val.value} value={val.value}>
							{val.name}
						</option>
					))}
				</select>
				<span onClick={() => setExpandedFilter(null)} className="closeDropDown">
					&#10008;
				</span>
			</div>
		);
	};

	let selVersion = selectedFilter.version;
	let selUsable = selectedFilter.usability;
	let selPurpose = selectedFilter.purpose;

	return (
		<div className="filter-container">
			<ShineBorder
				borderRadius={25}
				color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
				className={`filter-box ${expandedFilter ? "expanded" : ""}`}
			>
				{!expandedFilter && (
					<>
						<div className="filter-part pipe-border" onClick={() => handleFilterClick("version")}>
							{selVersion && <div className="selected-filter">{filterList[selVersion]}</div>}
							<div className={`${selVersion ? "select-filter" : ""}`}>Version</div>
						</div>
						<div className="filter-part pipe-border" onClick={() => handleFilterClick("usability")}>
							{selUsable && <div className="selected-filter">{filterList[selUsable]}</div>}
							<div className={`${selUsable ? "select-filter" : ""}`}>Usability</div>
						</div>
						<div className="filter-part" onClick={() => handleFilterClick("purpose")}>
							{selPurpose && <div className="selected-filter">{filterList[selPurpose]}</div>}
							<div className={`${selPurpose ? "select-filter" : ""}`}>Purpose</div>
						</div>
					</>
				)}
				{expandedFilter && selectDropDown()}
			</ShineBorder>
		</div>
	);
};

interface NodeProps {
	id: number;
	pId: number;
	title: string;
	children: NodeProps[];
	version: string;
	usability: string;
	purpose: string;
	depth: number;
}

interface NodeComponentProps {
	containerRef: React.MutableRefObject<HTMLDivElement | null>;
	refs: React.MutableRefObject<{ [key: number]: HTMLElement | null }>;
	node: NodeProps;
	handleNodeClick: (id: number) => void;
	expandedNode: number | null;
	expandedDepth2Node: number | null;
	setExpandedDepth2Node: React.Dispatch<React.SetStateAction<number | null>>;
}

const Node: React.FC<NodeComponentProps> = ({
	containerRef,
	refs,
	node,
	handleNodeClick,
	expandedNode,
	expandedDepth2Node,
	setExpandedDepth2Node,
}) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		if (node.depth === 2) {
			setExpandedDepth2Node(node.id === expandedDepth2Node ? null : node.id);
		} else {
			setExpanded(!expanded);
			handleNodeClick(node.id);
		}
	};
	return (
		<>
			<div ref={(el) => (refs.current[node.id] = el)} className={`node-container ${expanded ? "expanded" : ""}`}>
				<div className="mindmap-node" onClick={toggleExpand}>
					{node.title}
				</div>
				{(expanded || (node.depth === 2 && expandedDepth2Node === node.id)) && node.children?.length > 0 && (
					<div className="children">
						{node.children?.map((child) => (
							<React.Fragment key={child.id}>
								<Node
									containerRef={containerRef}
									refs={refs}
									node={child}
									handleNodeClick={handleNodeClick}
									expandedNode={expandedNode}
									expandedDepth2Node={expandedDepth2Node}
									setExpandedDepth2Node={setExpandedDepth2Node}
								/>
								<AnimatedBeam
									node={child}
									containerRef={containerRef}
									fromRef={refs.current[child.pId]}
									toRef={refs.current[child.id]}
								/>
							</React.Fragment>
						))}
					</div>
				)}
			</div>
		</>
	);
};

const HooksCheatSheet: React.FC = () => {
	const [expandedNode, setExpandedNode] = useState<number | null>(null);
	const [expandedDepth2Node, setExpandedDepth2Node] = useState<number | null>(null);
	const [filteredData, setFilteredData] = useState<NodeProps[]>(nodes);
	const refs = useRef<{ [key: number]: HTMLElement | null }>({});
	const containerRef = useRef<HTMLDivElement | null>(null);

	const handleFilterFunc = (data: SelectedFilter) => {
		const filteredNodes = nodes?.map((node) => ({
			...node,
			children: node.children?.filter(
				(child) =>
					(!data.version || child.version === data.version) &&
					(!data.usability || child.usability === data.usability) &&
					(!data.purpose || child.purpose === data.purpose)
			),
		}));
		setFilteredData(filteredNodes);
	};

	const handleNodeClick = (id: number) => {
		setExpandedNode(expandedNode === id ? null : id);
	};

	return (
		<div ref={containerRef} className="mindmap">
			<Filter filterFunc={handleFilterFunc} />
			<div className="nodes-container d-flex">
				<div className="flex-1">
					{filteredData.map((node) => (
						<Node
							containerRef={containerRef}
							refs={refs}
							key={node.id}
							node={node}
							handleNodeClick={handleNodeClick}
							expandedNode={expandedNode}
							expandedDepth2Node={expandedDepth2Node}
							setExpandedDepth2Node={setExpandedDepth2Node}
						/>
					))}
				</div>
				<div style={{ width: "80%" }}>
					<HooksCard />
				</div>
			</div>
		</div>
	);
};

export default HooksCheatSheet;

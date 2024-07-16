import React, { useState, ChangeEvent, useRef } from "react";
import "../blog.css";
import ShineBorder from "@/animation/ShineBorder";
import { AnimatedBeam } from "@/animation/Beam";

const filterList: { [key: string]: string } = {
  16: "React 16",
  17: "React 17",
  18: "React 18",
  most: "Most Frequently Used",
  frequent: "Frequently Used",
  less: "Less Frequently Used",
  rarely: "Rarely Used",
  basic: "Basic Hooks",
  intermediate: "Intermediate Hooks",
  advanced: "Advanced Hooks",
};

const filterData: {
  [key: string]: { value: string; name: string }[];
} = {
  version: [
    { value: "16", name: "React 16" },
    { value: "17", name: "React 17" },
    { value: "18", name: "React 18" },
  ],
  usability: [
    { value: "most", name: "Most Frequently Used" },
    { value: "frequent", name: "Frequently Used" },
    { value: "less", name: "Less Frequently Used" },
    { value: "rarely", name: "Rarely Used" },
  ],
  purpose: [
    { value: "basic", name: "Basic Hooks" },
    { value: "intermediate", name: "Intermediate Hooks" },
    { value: "advanced", name: "Advanced Hooks" },
  ],
};

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
            <option key={val.value} value={val.value}>{val.name}</option>
          ))}
        </select>
        <span onClick={() => setExpandedFilter(null)} className="closeDropDown">
          &#10008;
        </span>
      </div>
    );
  };
  let selVersion =  selectedFilter.version,
  selUsable = selectedFilter.usability,
  selPurpose = selectedFilter.purpose;

  return (
    <div className="filter-container">
        <ShineBorder borderRadius={25} color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className={`filter-box ${expandedFilter ? "expanded" : ""}`}>
      {/* <div className={`filter-box ${expandedFilter ? "expanded" : ""}`}> */}
        {!expandedFilter && (
          <>
            <div className="filter-part pipe-border" onClick={() => handleFilterClick("version")}>
              {selVersion && <div className="selected-filter">{filterList[selVersion]}</div>}
              <div className={`${selVersion? "select-filter": "" }`}>Version</div>
            </div>
            <div className="filter-part pipe-border" onClick={() => handleFilterClick("usability")}>
              {selUsable && <div className="selected-filter">{filterList[selUsable]}</div>}
              <div className={`${selUsable? "select-filter": "" }`}>Usability</div>
            </div>
            <div className="filter-part" onClick={() => handleFilterClick("purpose")}>
              {selPurpose && <div className="selected-filter">{filterList[selPurpose]}</div>}
              <div className={`${selPurpose? "select-filter": "" }`}>Purpose</div>
            </div>
          </>
        )}
        {expandedFilter && selectDropDown()}
      {/* </div> */}
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

const nodes: NodeProps[] = [
  {
    id: 1,
    pId:0,
    title: "State Hooks",
    children: [
      {
        id: 11,
                pId:1,
title: "useState",
        version: "16",
        usability: "most",
        purpose: "basic",
        depth: 2,
      },
      {
        id: 12,
                pId:1,
title: "useReducer",
        version: "16",
        usability: "frequent",
        purpose: "intermediate",
        depth: 2,
      },
    ],
    depth: 1,
  },
  {
    id: 2,
            pId:0,
title: "Context Hooks",
    children: [
      {
        id: 21,
                pId:2,
title: "useContext",
        version: "16",
        usability: "frequent",
        purpose: "basic",
        depth: 2,
      },
    ],
    depth: 1,
  },
  {
    id: 3,
            pId:0,
title: "Ref Hooks",
    children: [
      {
        id: 31,
                pId:3,
title: "useRef",
        version: "16",
        usability: "most",
        purpose: "basic",
        depth: 2,
      },
      {
        id: 32,
                pId:3,
title: "useImperativeHandle",
        version: "16",
        usability: "less",
        purpose: "advanced",
        depth: 2,
      },
    ],
    depth: 1,
  },
  {
    id: 4,
            pId:0,
title: "Effect Hooks",
    children: [
      {
        id: 41,
                pId:4,
title: "useEffect",
        version: "16",
        usability: "most",
        purpose: "basic",
        depth: 2,
      },
      {
        id: 42,
                pId:4,
title: "useLayoutEffect",
        version: "16",
        usability: "less",
        purpose: "advanced",
        depth: 2,
      },
      {
        id: 43,
                pId:4,
title: "useInsertionEffect",
        version: "18",
        usability: "rarely",
        purpose: "advanced",
        depth: 2,
      },
    ],
    depth: 1,
  },
  {
    id: 5,
            pId:0,
title: "Performance Hooks",
    children: [
      {
        id: 51,
                pId:5,
title: "useMemo",
        version: "16",
        usability: "frequent",
        purpose: "intermediate",
        depth: 2,
      },
      {
        id: 52,
                pId:5,
title: "useCallback",
        version: "16",
        usability: "frequent",
        purpose: "intermediate",
        depth: 2,
      },
      {
        id: 53,
                pId:5,
title: "useTransition",
        version: "18",
        usability: "less",
        purpose: "advanced",
        depth: 2,
      },
      {
        id: 54,
                pId:5,
title: "useDeferredValue",
        version: "18",
        usability: "less",
        purpose: "advanced",
        depth: 2,
      },
    ],
    depth: 1,
  },
  {
    id: 6,
            pId:0,
title: "Other Hooks",
    children: [
      {
        id: 61,
                pId:6,
title: "useDebugValue",
        version: "16",
        usability: "rarely",
        purpose: "advanced",
        depth: 2,
      },
      {
        id: 62,
                pId:6,
title: "useId",
        version: "18",
        usability: "rarely",
        purpose: "advanced",
        depth: 2,
      },
      {
        id: 63,
                pId:6,
title: "useSyncExternalStore",
        version: "18",
        usability: "rarely",
        purpose: "advanced",
        depth: 2,
      },
    ],
    depth: 1,
  },
];

interface NodeComponentProps {
  containerRef:React.MutableRefObject<any>;
  refs: React.MutableRefObject<any>;
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
console.log(refs, node.id, node.pId);

  return (
    <>
    <div  
      ref={el => (refs.current[node.id] = el)}
      className={`node-container ${expanded ? "expanded" : ""}`} 
    >
      <div className="mindmap-node" onClick={toggleExpand}>
        {node.title}
      </div>
      {(expanded || (node.depth === 2 && expandedDepth2Node === node.id)) && node.children?.length > 0 && (
        <div className="children">
          {node.children?.map((child) => (
            <React.Fragment key={child.id}>
              <Node
              
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
const containerRef = useRef(null)
  const handleFilterFunc = (data: SelectedFilter) => {
    const filteredNodes = nodes?.map((node) => ({
      ...node,
      children: node.children.filter(
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

  // const calculateNodePositions = (nodes: NodeProps[], depth: number, parentX: number, parentY: number) => {
  //   const width = 200;
  //   const height = 100;
  //   const xSpacing = 50;
  //   const ySpacing = 100;
  //   const calculatedNodes = nodes?.map((node, index) => {
  //     const x = parentX + index * (width + xSpacing);
  //     const y = parentY + (depth === 1 ? height : 0) + ySpacing;
  //     const children = calculateNodePositions(node.children, depth + 1, x, y);
  //     return { ...node, x, y, children };
  //   });
  //   return calculatedNodes;
  // };
  // const calculatedNodes = calculateNodePositions(filteredData, 1, 0, 0);

  return (
    <div ref={containerRef} className="mindmap">
      <Filter filterFunc={handleFilterFunc} />
      <div className="nodes-container">
        <div></div>
        {filteredData.map((node) => (
          <Node
          containerRef = {containerRef}
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
    </div>
  );
};

export default HooksCheatSheet;


// const Circle = forwardRef<
//   HTMLDivElement,
//   { className?: string; children?: React.ReactNode }
// >(({ className, children }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className={cn(
//         "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// });

// Circle.displayName = "Circle";

// export function AnimatedBeamMultipleOutputDemo({
//   className,
// }: {
//   className?: string;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const div1Ref = useRef<HTMLDivElement>(null);
//   const div2Ref = useRef<HTMLDivElement>(null);
//   const div3Ref = useRef<HTMLDivElement>(null);
//   const div4Ref = useRef<HTMLDivElement>(null);
//   const div5Ref = useRef<HTMLDivElement>(null);
//   const div6Ref = useRef<HTMLDivElement>(null);
//   const div7Ref = useRef<HTMLDivElement>(null);

//   return (
//     <div
//       className={cn(
//         "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
//         className,
//       )}
//       ref={containerRef}
//     >
//       <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
//         <div className="flex flex-col justify-center gap-2">
//           <Circle ref={div1Ref}>
//             1
//             {/* <Icons.googleDrive /> */}
//           </Circle>
//           <Circle ref={div2Ref}>
//             2
//             {/* <Icons.googleDocs /> */}
//           </Circle>
//           <Circle ref={div3Ref}>
//             3
//             {/* <Icons.whatsapp /> */}
//           </Circle>
//           <Circle ref={div4Ref}>
//             4
//             {/* <Icons.messenger /> */}
//           </Circle>
//           <Circle ref={div5Ref}>
//             5
//             {/* <Icons.notion /> */}
//           </Circle>
//         </div>
//         <div >
//           <Circle ref={div6Ref} className="size-16">
//             6
//             {/* <Icons.openai /> */}
//           </Circle>
//         </div>
//         <div className="flex flex-col justify-center">
//           <Circle ref={div7Ref}>
//             7
//             {/* <Icons.user /> */}
//           </Circle>
//         </div>
//       </div>

//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div1Ref}
//         toRef={div6Ref}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div2Ref}
//         toRef={div6Ref}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div3Ref}
//         toRef={div6Ref}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div4Ref}
//         toRef={div6Ref}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div5Ref}
//         toRef={div6Ref}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div6Ref}
//         toRef={div7Ref}
//       />
//     </div>
//   );
// }

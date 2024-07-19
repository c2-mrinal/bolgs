export const filterList: { [key: string]: string } = {
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

export const filterData: {
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

export const nodes = [
	{
		id: 1,
		pId: 0,
		title: "State Hooks",
		children: [
			{
				id: 11,
				pId: 1,
				title: "useState",
				version: "16",
				usability: "most",
				purpose: "basic",
				depth: 2,
				details: {
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
				},
			},
			{
				id: 12,
				pId: 1,
				title: "useReducer",
				version: "16",
				usability: "frequent",
				purpose: "intermediate",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "frequent",
					purpose: "intermediate",
					description: [
						"useReducer is a Hook that is used for state management, similar to useState but more suited for complex state logic.",
						"It is usually preferable when you have complex state logic involving multiple sub-values.",
					],
					uses: [
						"Managing state with complex logic or multiple sub-values.",
						"Handling global state in larger applications.",
					],
					versionRelease: "React 16.8.0",
					internalWorking: [
						"useReducer accepts a reducer function and an initial state as arguments.",
						"It returns the current state and a dispatch function.",
						"The dispatch function is used to execute the reducer function with a given action, updating the state accordingly.",
					],
					codeExample: {
						code: "const [state, dispatch] = useReducer(reducer, initialState);",
						syntaxExplanation: [
							"const [state, dispatch]: Destructures the array returned by useReducer.",
							"useReducer(reducer, initialState): Initializes the state with 'initialState' and sets up the reducer function.",
							"dispatch: Function to execute the reducer with a specific action to update the state.",
						],
					},
				},
			},
		],
		depth: 1,
	},
	{
		id: 2,
		pId: 0,
		title: "Context Hooks",
		children: [
			{
				id: 21,
				pId: 2,
				title: "useContext",
				version: "16",
				usability: "frequent",
				purpose: "basic",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "frequent",
					purpose: "basic",
					description: [
						"useContext is a Hook that allows you to access the value of a React Context.",
						"It simplifies the process of consuming context values in functional components.",
					],
					uses: [
						"Consuming context values in functional components.",
						"Sharing state or values across the component tree without prop drilling.",
					],
					versionRelease: "React 16.8.0",
					internalWorking: [
						"useContext accepts a context object (the value returned from React.createContext).",
						"It returns the current context value, as given by the nearest context provider.",
						"Reacts to changes in the context value and triggers a re-render of the component.",
					],
					codeExample: {
						code: "const value = useContext(MyContext);",
						syntaxExplanation: [
							"const value: Variable to store the context value.",
							"useContext(MyContext): Accesses the current value of 'MyContext' from the nearest context provider.",
						],
					},
				},
			},
		],
		depth: 1,
	},
	{
		id: 3,
		pId: 0,
		title: "Ref Hooks",
		children: [
			{
				id: 31,
				pId: 3,
				title: "useRef",
				version: "16",
				usability: "most",
				purpose: "basic",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "most",
					purpose: "basic",
					description: [
						"useRef is a Hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).",
						"It is often used to access or modify a DOM element directly.",
					],
					uses: [
						"Accessing or modifying a DOM element directly.",
						"Storing a mutable value that does not trigger a re-render when updated.",
					],
					versionRelease: "React 16.8.0",
					internalWorking: [
						"useRef returns a mutable ref object with a .current property.",
						"The .current property is initialized to the provided initial value.",
						"The ref object persists for the entire lifetime of the component and does not cause re-renders.",
					],
					codeExample: {
						code: "const myRef = useRef(null);",
						syntaxExplanation: [
							"const myRef: Variable to store the ref object.",
							"useRef(null): Initializes the ref object with .current set to null.",
						],
					},
				},
			},
			{
				id: 32,
				pId: 3,
				title: "useImperativeHandle",
				version: "16",
				usability: "less",
				purpose: "advanced",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "less",
					purpose: "advanced",
					description: [
						"useImperativeHandle is a Hook that customizes the instance value that is exposed when using ref.",
						"It allows you to control the ref object passed to parent components.",
					],
					uses: [
						"Customizing the ref object passed to parent components.",
						"Hiding internal implementation details from the parent.",
					],
					versionRelease: "React 16.8.0",
					internalWorking: [
						"useImperativeHandle allows you to define which instance values should be exposed to parent components.",
						"It is used with forwardRef to customize the ref object.",
						"The callback function provided to useImperativeHandle returns an object with the desired instance values.",
					],
					codeExample: {
						code: "useImperativeHandle(ref, () => ({ customMethod }));",
						syntaxExplanation: [
							"useImperativeHandle(ref, callback): Customizes the ref object.",
							"ref: The ref object to customize.",
							"callback: A function that returns an object with the instance values to expose.",
							"{ customMethod }: Example instance value to expose.",
						],
					},
				},
			},
		],
		depth: 1,
	},
	{
		id: 4,
		pId: 0,
		title: "Effect Hooks",
		children: [
			{
				id: 41,
				pId: 4,
				title: "useEffect",
				version: "16",
				usability: "most",
				purpose: "basic",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "most",
					purpose: "basic",
					description: [
						"useEffect is a Hook that lets you perform side effects in functional components.",
						"It is called after every render by default but can be optimized to run only when certain dependencies change.",
					],
					uses: ["Data fetching.", "Setting up a subscription.", "Manually changing the DOM."],
					versionRelease: "React 16.8.0",
					internalWorking: [
						"useEffect runs after every render by default.",
						"It can be optimized to run only when specific dependencies change.",
						"Cleans up previous effects before running new ones, allowing for cleanup logic.",
					],
					codeExample: {
						code: "useEffect(() => { /* side effect code */ }, [dependencies]);",
						syntaxExplanation: [
							"useEffect(callback, dependencies): Sets up a side effect.",
							"callback: The function containing the side effect code.",
							"dependencies: Array of variables that, when changed, will trigger the effect to run.",
						],
					},
				},
			},
			{
				id: 42,
				pId: 4,
				title: "useLayoutEffect",
				version: "16",
				usability: "less",
				purpose: "advanced",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "less",
					purpose: "advanced",
					description: [
						"useLayoutEffect is a Hook that fires synchronously after all DOM mutations.",
						"Use this to read layout from the DOM and synchronously re-render.",
					],
					uses: ["Measuring DOM elements.", "Synchronously performing DOM mutations."],
					versionRelease: "React 16.8.0",
					internalWorking: [
						"useLayoutEffect runs synchronously immediately after React has performed all DOM mutations.",
						"It can be used to read layout information from the DOM and synchronously re-render.",
						"This hook blocks the browser from painting until the effect has run.",
					],
					codeExample: {
						code: "useLayoutEffect(() => { /* DOM manipulation code */ }, [dependencies]);",
						syntaxExplanation: [
							"useLayoutEffect(callback, dependencies): Sets up a layout effect.",
							"callback: The function containing the DOM manipulation code.",
							"dependencies: Array of variables that, when changed, will trigger the effect to run.",
						],
					},
				},
			},
			{
				id: 43,
				pId: 4,
				title: "useInsertionEffect",
				version: "18",
				usability: "rarely",
				purpose: "advanced",
				depth: 2,
				details: {
					version: "18.0.0",
					usability: "rarely",
					purpose: "advanced",
					description: [
						"useInsertionEffect is a Hook that allows CSS-in-JS libraries to insert critical styles into the DOM during render.",
						"It is intended for injecting CSS styles during the rendering process.",
					],
					uses: [
						"Injecting CSS styles during render.",
						"Ensuring critical styles are in place before the browser paints.",
					],
					versionRelease: "React 18.0.0",
					internalWorking: [
						"useInsertionEffect runs synchronously before DOM mutations are made.",
						"This allows CSS-in-JS libraries to insert styles into the DOM before the browser has a chance to paint.",
						"It is intended for cases where styles must be in place before rendering completes.",
					],
					codeExample: {
						code: "useInsertionEffect(() => { /* style injection code */ }, [dependencies]);",
						syntaxExplanation: [
							"useInsertionEffect(callback, dependencies): Sets up an insertion effect.",
							"callback: The function containing the style injection code.",
							"dependencies: Array of variables that, when changed, will trigger the effect to run.",
						],
					},
				},
			},
		],
		depth: 1,
	},
	{
		id: 5,
		pId: 0,
		title: "Performance Hooks",
		children: [
			{
				id: 51,
				pId: 5,
				title: "useMemo",
				version: "16",
				usability: "frequent",
				purpose: "intermediate",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "frequent",
					purpose: "intermediate",
					description: [
						"useMemo is a Hook that returns a memoized value.",
						"It only recomputes the memoized value when one of the dependencies has changed.",
					],
					uses: [
						"Optimizing performance by memoizing expensive calculations.",
						"Avoiding unnecessary re-computations of values.",
					],
					versionRelease: "React 16.8.0",
					internalWorking: [
						"useMemo returns a memoized value, recomputing it only when one of the dependencies has changed.",
						"This optimization helps avoid expensive calculations on every render.",
						"It is useful for performance optimizations in functional components.",
					],
					codeExample: {
						code: "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
						syntaxExplanation: [
							"useMemo(callback, dependencies): Returns a memoized value.",
							"callback: The function containing the expensive calculation.",
							"dependencies: Array of variables that, when changed, will trigger the memoization to recompute.",
						],
					},
				},
			},
			{
				id: 52,
				pId: 5,
				title: "useCallback",
				version: "16",
				usability: "frequent",
				purpose: "intermediate",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "frequent",
					purpose: "intermediate",
					description: [
						"useCallback is a Hook that returns a memoized callback.",
						"It only changes if one of the dependencies has changed.",
					],
					uses: [
						"Optimizing performance by memoizing callback functions.",
						"Avoiding unnecessary re-creations of callback functions.",
					],
					versionRelease: "React 16.8.0",
					internalWorking: [
						"useCallback returns a memoized callback function, which only changes if one of the dependencies has changed.",
						"This optimization helps avoid re-creating callback functions on every render.",
						"It is useful for performance optimizations in functional components.",
					],
					codeExample: {
						code: "const memoizedCallback = useCallback(() => { /* callback code */ }, [dependencies]);",
						syntaxExplanation: [
							"useCallback(callback, dependencies): Returns a memoized callback.",
							"callback: The function containing the callback code.",
							"dependencies: Array of variables that, when changed, will trigger the memoization to recompute.",
						],
					},
				},
			},
			{
				id: 53,
				pId: 5,
				title: "useTransition",
				version: "18",
				usability: "less",
				purpose: "advanced",
				depth: 2,
				details: {
					version: "18.0.0",
					usability: "less",
					purpose: "advanced",
					description: [
						"useTransition is a Hook that allows you to mark updates as non-urgent, providing better user experience during state transitions.",
						"It helps manage state transitions to improve user experience.",
					],
					uses: [
						"Managing non-urgent updates to improve user experience.",
						"Deferring updates to avoid blocking the main thread.",
					],
					versionRelease: "React 18.0.0",
					internalWorking: [
						"useTransition returns a stateful value for pending state and a function to start the transition.",
						"Updates inside the transition function are marked as non-urgent.",
						"This allows for deferring updates and improving user experience during transitions.",
					],
					codeExample: {
						code: "const [startTransition, isPending] = useTransition();",
						syntaxExplanation: [
							"const [startTransition, isPending]: Destructures the array returned by useTransition.",
							"startTransition: Function to start the transition and mark updates as non-urgent.",
							"isPending: Boolean value indicating if the transition is pending.",
						],
					},
				},
			},
			{
				id: 54,
				pId: 5,
				title: "useDeferredValue",
				version: "18",
				usability: "less",
				purpose: "advanced",
				depth: 2,
				details: {
					version: "18.0.0",
					usability: "rarely",
					purpose: "advanced",
					description: [
						"useDeferredValue is a Hook that defers a value until after high-priority updates are processed.",
						"It helps avoid blocking the main thread by deferring updates.",
					],
					uses: [
						"Deferring updates to avoid blocking the main thread.",
						"Improving performance by handling high-priority updates first.",
					],
					versionRelease: "React 18.0.0",
					internalWorking: [
						"useDeferredValue returns a deferred version of the value that updates less urgently.",
						"This helps avoid blocking the main thread and improves performance by deferring updates.",
						"It is useful for performance optimizations in functional components.",
					],
					codeExample: {
						code: "const deferredValue = useDeferredValue(value);",
						syntaxExplanation: [
							"useDeferredValue(value): Returns a deferred version of the value.",
							"value: The value to defer.",
						],
					},
				},
			},
		],
		depth: 1,
	},
	{
		id: 6,
		pId: 0,
		title: "Other Hooks",
		children: [
			{
				id: 61,
				pId: 6,
				title: "useDebugValue",
				version: "16",
				usability: "rarely",
				purpose: "advanced",
				depth: 2,
				details: {
					version: "16.8.0",
					usability: "rarely",
					purpose: "advanced",
					description: [
						"useDebugValue is a hook that can be used to display a label for custom hooks in React DevTools.",
						"It helps developers understand the current state of a custom hook.",
					],
					example: {
						code: "function useMyHook(value) {\n  const [state, setState] = useState(value);\n  useDebugValue(state ? 'Active' : 'Inactive');\n  return state;\n}",
						explanation: [
							"This code defines a custom hook 'useMyHook' that takes a value.",
							"It uses 'useDebugValue' to indicate whether the state is 'Active' or 'Inactive'.",
						],
					},
					internalWorking: [
						"It's used primarily for debugging purposes.",
						"It doesn't affect the component's logic or rendering.",
					],
				},
			},
			{
				id: 62,
				pId: 6,
				title: "useId",
				version: "18",
				usability: "rarely",
				purpose: "advanced",
				depth: 2,
				details: {
					version: "18.0.0",
					usability: "rarely",
					purpose: "advanced",
					description: [
						"useId generates a unique ID that is stable across server and client renders.",
						"It is useful for accessibility attributes such as 'aria-labelledby'.",
					],
					example: {
						code: "const id = useId();\nreturn <label htmlFor={id}>Label</label>;\nreturn <input id={id} />;",
						explanation: [
							"The 'useId' hook generates a unique ID for the label and input elements.",
							"This ensures that the label correctly associates with its input.",
						],
					},
					internalWorking: [
						"It guarantees a unique ID even during concurrent rendering.",
						"It's primarily used for enhancing accessibility.",
					],
				},
			},
			{
				id: 63,
				pId: 6,
				title: "useSyncExternalStore",
				version: "18",
				usability: "rarely",
				purpose: "advanced",
				depth: 2,
				details: {
					version: "18.0.0",
					usability: "rarely",
					purpose: "advanced",
					description: [
						"useSyncExternalStore is used to subscribe to external data stores and synchronously read their state.",
						"It allows React components to read and subscribe to data from an external store.",
					],
					example: {
						code: "const state = useSyncExternalStore(store.subscribe, store.getSnapshot);\nreturn <div>{state}</div>;",
						explanation: [
							"This code subscribes to an external store, updating the component state based on the store's state.",
							"The 'store.subscribe' function is used to listen for changes.",
						],
					},
					internalWorking: [
						"It ensures that the component stays in sync with the external store's state.",
						"It's useful for integrating with state management libraries.",
					],
				},
			},
		],
		depth: 1,
	},
];

export const RightArrowIcon = ({ height = 18, width = 18, className = "", fill = "none" }) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill={fill}
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			d="M4 12H20M20 12L16 8M20 12L16 16"
			stroke={fill}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

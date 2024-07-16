import React from "react";
import "./theme.css";
import { useTheme } from "./ThemeContext";

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`toggle-button ${theme}`}>
			<input type="checkbox" className="checkbox" id="checkbox" defaultChecked={theme === "light" ? false : true} onClick={toggleTheme} />
			<label htmlFor="checkbox" className="checkbox-label">
				<i className="fa-regular fa-moon"></i>
				<i className="fa-regular fa-sun"></i>
				<span className="ball"></span>
			</label>
		</div>
	);
};

export default ThemeToggleButton;

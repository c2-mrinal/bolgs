"use client";

import React from "react";
import "./theme.css";
import { useTheme } from "./ThemeContext";
import MoonIcon, { SunIcon } from "../../../public/Icons/theme";
import { BorderBeam } from "@/animation/BeamBorder";

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`toggle-button ${theme}`}>
			<input
				type="checkbox"
				className="checkbox"
				id="checkbox"
				defaultChecked={theme === "light" ? false : true}
				onClick={toggleTheme}
			/>
			<label htmlFor="checkbox" className="checkbox-label">
				<MoonIcon fill="#f1c40f" />
				<SunIcon fill="#f39c12" />
				<span className="ball"></span>
				<BorderBeam size={50} duration={12} delay={9} />
			</label>
		</div>
	);
};

export default ThemeToggleButton;

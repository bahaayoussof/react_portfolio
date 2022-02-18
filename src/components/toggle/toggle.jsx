import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../images/icons/sun.png";
import Moon from "../../images/icons/moon.png";
import { ThemeContext } from "../../context";
const Toggle = () => {
	const theme = useContext(ThemeContext);

	const handleClick = () => {
		theme.dispatch({ type: "TOGGLE" });
	};
	return (
		<div className="t">
			<img src={Sun} alt="sun" className="t-icon" />
			<img src={Moon} alt="moon" className="t-icon" />
			<div
				className="t-button"
				onClick={handleClick}
				style={{ left: theme.state.darkMode ? 0 : 25 }}
			></div>
		</div>
	);
};

export default Toggle;

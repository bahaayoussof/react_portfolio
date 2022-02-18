import React, { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import ProjectList from "./components/projectList/projectList";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";

function App() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div
			style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode ? "white" : "black",
			}}
		>
			<Toggle />
			<Intro />
			<About />
			<ProjectList />
			<Contact />
		</div>
	);
}
export default App;

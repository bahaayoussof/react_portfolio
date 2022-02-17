import Project from "../project/project";
import "./projectList.css";
import { projects } from "../../data";
const ProjectList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title">Create & inspire. It's Bahaa</h1>
				<p className="pl-desc">
					Creative sites that your work has been waiting for. Beautiful homes, stunning Styles
					& a whole lot more awaits inside.
				</p>
			</div>
			<div className="pl-list">
				{projects.map(project => (
					<Project key={project.id} image={project.img} link={project.link} />
				))}
			</div>
		</div>
	);
};

export default ProjectList;

import certificate from "../../images/certificate.png";
import aboutImage from '../../images/about-image.jpg';
import "./about.css";
const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img src={aboutImage} alt="about-image" className="a-img" />
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">
					I'm a javascript developer with a good understanding of object-oriented programming
					principles.
				</p>
				<p className="a-desc">
					I have a solid foundation in web development, data structures, and algorithms. I also
					have hands-on experience developing web applications using javascript technologies.
				</p>
				<div className="a-certificate">
					<a
						href="https://coursera.org/share/dd909230a685fe2e1fc112dadcc9ad06"
						target="_blank"
					>
						<img src={certificate} alt="certificate" className="a-certificate-img" />
					</a>
					<div className="a-certificate-texts">
						<h4 className="a-certificate-title">Full-Stack Web Development with React</h4>
						<p className="a-certificate-desc">
							Design a Web client application using Bootstrap 4 and React, and Develop
							server-side support using Node.js.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

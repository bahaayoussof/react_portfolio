import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../images/icons/phone.png";
import Email from "../../images/icons/email.png";
import Address from "../../images/icons/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleSubmit = e => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_yp56x24",
				"template_easeyqg",
				formRef.current,
				"user_a76vEnb6Y7faVIkbIP6Po"
			)
			.then(
				result => {
					console.log(result.text);
					setDone(true);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="c">
			<div className="c-bg"></div>
			<div className="c-wrapper">
				<div className="c-left">
					<h1 className="c-title">Contact Me</h1>
					<div className="c-info">
						<div className="c-info-item">
							<img src={Phone} alt="phone" className="c-icon" />
							+201006997495
						</div>
						<div className="c-info-item">
							<img src={Email} alt="email" className="c-icon" />
							bahaayoussof@gmail.com
						</div>
						<div className="c-info-item">
							<img src={Address} alt="address" className="c-icon" />
							Cairo, Nasr city, El Zahraa
						</div>
					</div>
				</div>
				<div className="c-right">
					<p className="c-desc">
						<b>What's your story?</b> Get in touch. Always available for freelancing if the
						right project comes along. me
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input
							style={{ backgroundColor: darkMode && "#333", color: darkMode && "#eee" }}
							type="text"
							placeholder="Name"
							name="user_name"
						/>
						<input
							style={{ backgroundColor: darkMode && "#333", color: darkMode && "#eee" }}
							type="text"
							placeholder="Subject"
							name="user_subject"
						/>
						<input
							style={{ backgroundColor: darkMode && "#333", color: darkMode && "#eee" }}
							type="text"
							placeholder="Email"
							name="user_email"
						/>
						<textarea
							style={{ backgroundColor: darkMode && "#333", color: darkMode && "#eee" }}
							rows="5"
							placeholder="Message"
							name="message"
						/>
						<button>Submit</button>
						<span className="c-email-done">{done && "Thank you..."}</span>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

import { Label, Input, Button } from "semantic-ui-react";
import "../css/forgotPassword.css";
import { useState } from "react";
import CustomMessage from "./Message";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [emailSent, setEmailSent] = useState<boolean | null>(null);

	const handleInputChange = (value: string) => {
		setEmail(value);
	};

	const sendEmail = () => {
		if (email !== "") {
			setEmailSent(true);
		} else {
			setEmailSent(false);
		}
	};

	return (
		<div className="forgotContainer">
			<h1 className="dontWorryTitle">Don't worry</h1>
			<h3>Please add your email and we will send you instrucctions to recover your password.</h3>
			<Input
				className="emailInput"
				value={email}
				name="email"
				type="email"
				onChange={(e) => {
					handleInputChange(e.target.value);
				}}
				placeholder="your email here..."
				width="100%"
			/>
			<Button className="recoverPassBtn" onClick={sendEmail}>
				Login
			</Button>
			{emailSent !== null &&
				(emailSent ? (
					<CustomMessage
						success={emailSent}
						title="Email Sent"
						message="please check your email."
					/>
				) : (
					<CustomMessage success={emailSent} title="Error" message="please provide your email." />
				))}

			<Link to="/" className="goBackLink">
				{"< Go back"}
			</Link>
		</div>
	);
};
export default ForgotPassword;

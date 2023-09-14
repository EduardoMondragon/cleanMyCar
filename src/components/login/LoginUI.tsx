import "../../css/login.css";
import { Link } from "react-router-dom";
import LogoBg from "../../assets/loginLogoBg.png";
import CustomMessage from "../Message";
import LoginLogic from "./LoginLogic";
import FormView from "./Form";

const Login = () => {
	const { user, success, handleInputChange, handleSubmit } = LoginLogic();
	return (
		<div className="loginContainer">
			<div className="loginLogoBg" style={{ backgroundImage: `url('${LogoBg}')` }}></div>
			<div className="loginForm">
				<Link to="/help" className="needHelp">
					Need help?
				</Link>
				<div className="formCard">
					<h4>Log in</h4>
					<FormView user={user} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
				</div>
				{success !== undefined &&
					(success ? (
						<CustomMessage
							success={success}
							title="Welcome back!"
							message="We're happy to see you again."
						/>
					) : (
						<CustomMessage success={success} title="Bad Credentials" message="Please try again." />
					))}
			</div>
		</div>
	);
};
export default Login;

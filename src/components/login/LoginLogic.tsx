import { useState } from "react";

interface IUser {
	email: string;
	password: string;
}

const LoginLogic = () => {
	const [user, setUser] = useState<IUser>({ email: "", password: "" });
	const [success, setSuccess] = useState<boolean | undefined>(undefined);

	/**
	 *  Handle email and password state value from input onChange
	 * @param target input target
	 */
	const handleInputChange = (target: any) => {
		console.log(target.name, target.value);
		setUser((prevState: any) => {
			return { ...prevState, [target.name]: target.value };
		});
	};

	/**
	 * Submit form
	 * @param event
	 */
	const handleSubmit = (event: any) => {
		console.log(user);
		event.preventDefault();
		const email: string = user?.email || "";
		const password: string = user?.password || "";
		if (email !== "" && password !== "") {
			setSuccess(true);
		} else {
			setSuccess(false);
		}
	};

	// state and fns
	return { user, success, handleInputChange, handleSubmit };
};

export default LoginLogic;

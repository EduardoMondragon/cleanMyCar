import { Form, Button, Input, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FormView = ({ user, handleInputChange, handleSubmit }: any) => {
	return (
		<Form action="" onSubmit={handleSubmit} className="inputsForm">
			<Form.Field>
				<Label className="label">Email</Label>
				<Input
					value={user?.email}
					name="email"
					type="email"
					onChange={(e) => {
						handleInputChange(e.target);
					}}
					placeholder="joe@email.com"
					width="100%"
				/>
			</Form.Field>
			<Form.Field>
				<Label className="label">Password</Label>
				<Input
					value={user?.password}
					name="password"
					type="password"
					onChange={(e) => {
						handleInputChange(e.target);
					}}
					placeholder="Enter your password"
				/>
				<div className="forgotPassword">
					<Link to="/forgot">Forgot password?</Link>
				</div>

				<Button type="submit">Login</Button>
			</Form.Field>
		</Form>
	);
};

export default FormView;

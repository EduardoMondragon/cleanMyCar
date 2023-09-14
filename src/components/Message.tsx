import { Message } from "semantic-ui-react";

const CustomMessage = (props: any) => {
	const { success, title, message } = props;
	return (
		<>
			{!success ? (
				<Message negative>
					<Message.Header>{title}</Message.Header>
					<p>{message}</p>
				</Message>
			) : (
				<Message positive>
					<Message.Header>{title}</Message.Header>
					<p>{message}</p>
				</Message>
			)}
		</>
	);
};

export default CustomMessage;

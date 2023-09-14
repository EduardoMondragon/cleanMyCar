import { Link } from "react-router-dom";
import "../css/help.css";

const HelpScreen = () => {
	return (
		<div className="helpContainer">
			<Link to="/" className="goBackLink">
				{"< Go back"}
			</Link>
			<h1 className="helpTitle">Please follow the next information to understand this app.</h1>
			<p className="helpInstructions">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lobortis nibh. Aliquam
				semper vitae mi vel maximus. Praesent sodales vehicula elementum. Suspendisse sed risus
				vitae mauris tristique finibus. Aliquam non venenatis nibh, et facilisis nisi. Donec
				consequat eu sapien sed commodo. Fusce vel dolor non ligula consectetur consequat. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Nunc in blandit libero. Fusce at ante
				enim.
			</p>
			<p className="helpInstructions">
				Aenean vestibulum mollis sollicitudin. Praesent fermentum id tellus vel egestas. Vestibulum
				vestibulum est in dolor efficitur commodo. Maecenas pulvinar ut ipsum suscipit commodo.
				Donec sollicitudin pellentesque dolor vitae egestas. Integer sollicitudin sem nisl, sit amet
				efficitur neque laoreet vel. Ut finibus hendrerit justo, non viverra mauris lobortis sit
				amet. Cras semper, nisl at aliquam laoreet, ipsum ex tempus eros, vel varius eros sem vitae
				dui. Phasellus sed consequat neque. Vestibulum lacinia felis at enim porta venenatis.
				Curabitur sodales elit sit amet mauris venenatis sollicitudin. Nulla dolor nunc, malesuada
				et nisi in, mattis ornare nisi. Maecenas vulputate interdum quam.
			</p>
			<p className="helpInstructions">
				Donec semper ullamcorper imperdiet. Aenean quis vulputate sem, ac aliquet lectus. Aliquam ac
				cursus lacus, sed faucibus arcu. Curabitur auctor tincidunt auctor. Ut et semper dolor.
				Vivamus vel mi vitae mauris pulvinar malesuada ac et est. Vivamus malesuada neque eu nisi
				vehicula porta. Sed ac metus elementum, tempus elit sed, consectetur purus. Proin tortor
				ipsum, vulputate gravida vestibulum ac, maximus a lectus. Donec a lacinia ex. Curabitur at
				placerat ligula.
			</p>
			<a className="helpLink" href="https://www.lipsum.com/feed/html" target="_blank">
				See more information here.
			</a>
		</div>
	);
};
export default HelpScreen;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/login/LoginUI";
import HelpScreen from "../components/HelpScreen";
import ForgotPassword from "../components/ForgotPassword";

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/help" element={<HelpScreen />} />
				<Route path="/forgot" element={<ForgotPassword />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import HelpScreen from "../components/HelpScreen";
import ForgotPassword from "../components/ForgotPassword";
function AppRouter() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Route, { path: "/help", element: _jsx(HelpScreen, {}) }), _jsx(Route, { path: "/forgot", element: _jsx(ForgotPassword, {}) })] }) }));
}
export default AppRouter;

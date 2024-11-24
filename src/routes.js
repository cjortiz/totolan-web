import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "./config/paths";
import * as Screens from "./screens";
export const AppRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: PATHS.LOGIN.path, replace: true }) }), _jsx(Route, { path: PATHS.LOGIN.path, element: _jsx(Screens.Login, {}) }), _jsx(Route, { path: PATHS.DASHBOARD.path, element: _jsx(Screens.Dashboard, {}) }), _jsx(Route, { path: PATHS.PROFILE.path, element: _jsx(Screens.Dashboard, {}) }), _jsx(Route, { path: PATHS.Students.path, element: _jsx(Screens.Students, {}) }), _jsx(Route, { path: PATHS.NOT_FOUND.path, element: _jsx(Screens.PageNotFound, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: PATHS.NOT_FOUND.path }) })] }));
};

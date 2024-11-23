import { Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "./config/paths";
import * as Screens from "./screens";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect the root path ("/") to the login page */}
      <Route path="/" element={<Navigate to={PATHS.LOGIN.path} replace />} />

      {/* Login Route */}
      <Route path={PATHS.LOGIN.path} element={<Screens.Login />} />

      {/* Dashboard and Profile Routes */}
      <Route path={PATHS.DASHBOARD.path} element={<Screens.Dashboard />} />
      <Route path={PATHS.PROFILE.path} element={<Screens.Dashboard />} />
      <Route path={PATHS.Students.path} element={<Screens.Students />} />

      {/* Not Found Route */}
      <Route path={PATHS.NOT_FOUND.path} element={<Screens.PageNotFound />} />

      {/* Redirect to Not Found for unrecognized routes */}
      <Route path="*" element={<Navigate to={PATHS.NOT_FOUND.path} />} />
    </Routes>
  );
};

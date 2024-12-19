import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "./config/paths";
import * as Screens from "./screens";
import { AuthListener } from "./common/component/auth-listener/auth-listener";
import { useStores } from "./common";
import { observer } from "mobx-react-lite";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthListener />
      <Routes>
        <Route path={PATHS.LOGIN.path} element={<Screens.Login />} />
        <Route path={PATHS.LOGOUT.path} element={<Screens.Logout />} />

        {/* Not Found Route */}
        <Route path={PATHS.NOT_FOUND.path} element={<Screens.PageNotFound />} />

        {PrivateRoutes}
        {/* Redirect to Not Found for unrecognized routes */}
        <Route path="*" element={<Navigate to={PATHS.NOT_FOUND.path} />} />
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRoute = observer((props: { children: any }) => {
  const { children } = props;
  const { authStore } = useStores();

  if (!authStore.accessToken) {
    return <Navigate to={PATHS.LOGIN.path} />;
  }

  return <>{children}</>;
});

const PrivateRoutes = (
  <Route
    path={PATHS.MAIN.path}
    element={
      <PrivateRoute>
        <Screens.Main />
      </PrivateRoute>
    }
  >
    {/* Dashboard and Profile Routes */}
    <Route index element={<Navigate to={PATHS.DASHBOARD.path} />} />
    <Route
      path={PATHS.DASHBOARD.path}
      element={<Navigate to={PATHS.DASHBOARD.path} />}
    />

    <Route path={PATHS.Students.path} element={<Screens.Students />} />
    <Route
      path={PATHS.GradeYearSetup.path}
      element={<Screens.GradeYearSetup />}
    />
    <Route path={PATHS.SectionSetup.path} element={<Screens.SectionSetup />} />
    <Route path={PATHS.TeacherSetup.path} element={<Screens.TeacherSetup />} />
  </Route>
);

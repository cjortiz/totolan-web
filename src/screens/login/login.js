import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../config/paths";
export const Login = () => {
    const navigate = useNavigate();
    return (_jsx(Button, { onClick: () => navigate(PATHS.PROFILE.path), children: "go to dashboard" }));
};

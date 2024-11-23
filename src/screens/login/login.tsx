import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../config/paths";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(PATHS.PROFILE.path)}>
      go to dashboard
    </Button>
  );
};

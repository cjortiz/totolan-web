import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../../../config";
import { translate } from "../../i18n";
import { useStores } from "../../models";

export const AuthListener = observer(() => {
  const { messageStore } = useStores();
  const navigate = useNavigate(); // Get the navigate function
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    console.log(messageStore.content);
    if (
      messageStore.content === translate("errorMessage.expiredSession") &&
      location.pathname !== PATHS.LOGIN.path
    ) {
      navigate(PATHS.LOGOUT.path);
    }
  }, [messageStore.content]);

  return <></>;
});

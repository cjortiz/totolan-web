import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../common";
import { PATHS } from "../../config";

export const Logout = observer(() => {
  const { authStore, appStateStore, messageStore } = useStores();
  const stores = useStores();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStore.accessToken !== "") {
      navigate(PATHS.LOGIN.path);

      //   logout(
      //     authStore.refreshToken,
      //     messageStore.showMessage,
      //     appStateStore.setLoading
      //   ).then(() => {
      //     Object.keys(stores).forEach(key => {
      //       if (key !== "rememberMeStore") {
      //         if ("reset" in stores[key]) {
      //           stores[key].reset();
      //         }
      //       }
      //     });
      //     navigate(PATHS.LOGIN.path);
      //   });
    } else {
      navigate(PATHS.LOGIN.path);
    }
  }, [stores, authStore]);

  return <></>;
});

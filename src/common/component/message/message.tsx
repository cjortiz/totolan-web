import { observer } from "mobx-react-lite";
import { useStores } from "../..";
import { message, notification } from "antd";
import { useEffect } from "react";

export const Message = observer(() => {
  const { messageStore } = useStores();
  const { open } = messageStore;
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (open) {
      const { type } = messageStore;
      api[type](messageStore.getContent());
    }
  }, [open, messageStore, api]);

  return <>{contextHolder}</>;
});

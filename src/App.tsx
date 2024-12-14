import { useState, useEffect } from "react";
import {
  RootStore,
  setupRootStore,
  RootStoreProvider,
  Message,
} from "./common";
import { Spinner } from "./common/component/spinner/spinner";
import { AppRoutes } from "./routes";

function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  // Setup root store asynchronously
  useEffect(() => {
    (async () => {
      const store = await setupRootStore();
      setRootStore(store);
    })();
  }, []);

  if (!rootStore) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <Message />
      <Spinner />
      <AppRoutes />
    </RootStoreProvider>
  );
}

export default App;

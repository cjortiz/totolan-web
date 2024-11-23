import { createAppStateDefaultModel } from "./app-state-store";

describe("AppStateStoreModel", () => {
  it("should return correct loading state", () => {
    // setup
    const snapshot = createAppStateDefaultModel();
    const defaultModel = snapshot.create();
    const modifiedModel = snapshot.create();
    const expected = true;
    const resetModel = snapshot.create();
    const defaultLoadingState = resetModel.isLoading();
    resetModel.setLoading(!defaultLoadingState);

    // exercise
    modifiedModel.setLoading(true);
    resetModel.reset();

    // verify
    expect(defaultModel.isLoading()).toBe(false);
    expect(modifiedModel.isLoading()).toBe(expected);
    expect(resetModel.isLoading()).toBe(defaultLoadingState);
  });
});

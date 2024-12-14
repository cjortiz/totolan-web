import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const AuthStoreModel = types
  .model("Auth")
  .props({
    id: types.optional(types.number, 0),
    userName: types.maybeNull(types.string),
    accessToken: types.maybeNull(types.string),
    refreshToken: types.maybeNull(types.string),
    rememberMe: types.optional(types.boolean, false),
    name: types.maybeNull(types.string),
    loggedIn: types.optional(types.boolean, false),
  })
  .views((self) => ({
    isLoggedIn: () => {
      return !!self.accessToken;
    },
  }))
  .actions((self) => ({
    setAuthCredentials: ({
      id,
      userName,
      token,
      refreshToken,
      name,
    }) => {
      self.id = id;
      self.userName = userName;
      self.accessToken = token;
      self.refreshToken = refreshToken;
      self.name = name;
    },

    setLoggedIn: (loggedIn: boolean) => {
      self.loggedIn = loggedIn;
    },
  }))
  .actions((self) => ({
    reset: () => {
      Object.keys(DEFAULT_STATE).forEach((key) => {
        switch (key) {
          case "email":
            if (!self.rememberMe) {
              self[key] = DEFAULT_STATE[key];
            }
            break;
          case "rememberMe":
            break;
          default:
            self[key] = DEFAULT_STATE[key];
            break;
        }
      });
    },
    setRememberMe: (rememberMe: boolean) => {
      self.rememberMe = rememberMe;
    },
  }));

const DEFAULT_STATE = {
  userName: null,
  accessToken: null,
  refreshToken: null,
  rememberMe: false,
  name: null,
};

type AuthType = Instance<typeof AuthStoreModel>;
export type Auth = AuthType;
type AuthSnapshotType = SnapshotOut<typeof AuthStoreModel>;
export type AuthSnapshot = AuthSnapshotType;
export const createAuthDefaultModel = () =>
  types.optional(AuthStoreModel, DEFAULT_STATE);
export const getDefaultAuthStoreModel = () => DEFAULT_STATE;

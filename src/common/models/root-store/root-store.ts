/* istanbul ignore file */

import { Instance, SnapshotOut, types } from "mobx-state-tree";

import {
  AppStateStoreModel,
  getDefaultAppStateStoreModel,
} from "../app-state-store/app-state-store";
import {
  getDefaultMessageStoreModel,
  MessageStoreModel,
} from "../message-store/message-store";

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  appStateStore: types.optional(AppStateStoreModel, getDefaultAppStateStoreModel()),
  messageStore: types.optional(MessageStoreModel,getDefaultMessageStoreModel)
})

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>;

/**
 * The data of a RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;

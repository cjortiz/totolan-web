import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { DropdownInterface } from "../../constants";
import { axiosInstance } from "../../../services/api/axios/axios-instance";

const DEFAULT_DROPDOWN_STATE = {
  options: [],
};

export interface DropdownStoreInterface {
  options?: DropdownInterface[];
}

export interface FetchDropdownProps {
  queryUrl: string;
  queryStore: string;
  onError: () => void;
  setLoading: (loading: boolean) => void;
}

export const DropdownModel = types
  .model("Dropdown")
  .props({
    teacherDropdown: types.optional(
      types.frozen<DropdownStoreInterface>(),
      DEFAULT_DROPDOWN_STATE
    ),
    sectionDropdown: types.optional(
      types.frozen<DropdownStoreInterface>(),
      DEFAULT_DROPDOWN_STATE
    ),
  })
  .actions((self) => ({
    setTeacherDropdownOptions: (options: DropdownInterface[]) => {
      self.teacherDropdown = {
        options: options,
      };
    },
    setSectionDropdownOptions: (options: DropdownInterface[]) => {
      self.sectionDropdown = {
        options: options,
      };
    },
  }))
  .actions((self) => ({
    fetchDropdown: async ({
      queryUrl,
      queryStore,
      onError,
      setLoading,
    }: FetchDropdownProps) => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`${queryUrl}/drop-down`);
        if (response) {
          console.log(response.data.resultData);
          switch (queryStore) {
            case "teacher-dropdown-store":
              self.setTeacherDropdownOptions(response.data.resultData);
              break;
            case "section-dropdown-store":
              self.setSectionDropdownOptions(response.data.resultData);
              break;
          }
        }
      } catch (error) {
        onError();
      } finally {
        setLoading(false);
      }
    },
  }));

const DEFAULT_STATE = {
  teacherDropdown: DEFAULT_DROPDOWN_STATE,
  sectionDropdown: DEFAULT_DROPDOWN_STATE,
};

export type DropdownType = Instance<typeof DropdownModel>;
export type Dropdown = DropdownType;
type DropdownSnapshotType = SnapshotOut<typeof DropdownModel>;
export type DropdownSnapshot = DropdownSnapshotType;
export const createManageDropdownDefaultModel = () =>
  types.optional(DropdownModel, DEFAULT_STATE);
export const getDefaultDropdownModel = () => DEFAULT_STATE;

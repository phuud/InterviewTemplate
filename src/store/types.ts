import { Item } from "../mocks/list";

export interface ListState {
  loading: boolean;
  list: Item[];
}

export const LIST_LOADING = "app/agent/tasks/loading";
export const LIST_LOADED = "app/agent/tasks/loaded";

interface ListLoadingAction {
  type: typeof LIST_LOADING;
}

interface ListLoadedAction {
  type: typeof LIST_LOADED;
  list: Item[];
}

export type ListActionTypes = ListLoadingAction | ListLoadedAction;

import getList from "../mocks/list";
import { LIST_LOADING, LIST_LOADED, ListActionTypes } from "./types";

export const loadingList = (): ListActionTypes => ({ type: LIST_LOADING });
export const listLoaded = (): ListActionTypes => ({
  type: LIST_LOADED,
  list: getList()
});

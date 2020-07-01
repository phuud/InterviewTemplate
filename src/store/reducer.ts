import { ListState, ListActionTypes, LIST_LOADING, LIST_LOADED } from "./types";

const initialState: ListState = {
  loading: false,
  list: []
};

export default function listReducer(
  state = initialState,
  action: ListActionTypes
): ListState {
  switch (action.type) {
    case LIST_LOADING: {
      return {
        loading: true,
        list: []
      };
    }
    case LIST_LOADED: {
      return {
        loading: false,
        list: action.list
      };
    }
    default:
      return state;
  }
}

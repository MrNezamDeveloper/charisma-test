import { ActionAdd, ActionDelete, ActionMain } from "./actionTypes";
import {  MainListState } from "./reducer.module";

const initialState = {
  mainLists: [],
  myLists: [],
};

export const reducer = (
  state: MainListState = initialState,
  action: ActionMain | ActionAdd | ActionDelete,
):any => {
  switch (action.type) {
    case "MAIN_LIST":
      return { ...state, mainLists: action.payload };
    case "ADD_TO_LIST":
      return { ...state, myLists: [...state.myLists, action.payload] };
    case "DELETE_FROM_LIST":
      const myListsModelData = [...state.myLists];
      const indexT = myListsModelData.findIndex(
        (s) => s.id === action.payload.id,
      );
      if (indexT > -1) {
        myListsModelData.splice(indexT, 1);
      }
      return {
        ...state,
        myLists: myListsModelData,
      };

    default:
      return state;
  }
};

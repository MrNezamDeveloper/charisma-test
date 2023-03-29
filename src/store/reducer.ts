import { ActionAdd, ActionDelete, ActionMain } from "./actionTypes";

export interface ILists {
  id?: number;
  eamil?: string;
  body?: string;
  name?: string;
}

export interface MainListState {
  myLists: ILists[];
  mainLists: ILists[];
}

const initialState = {
  mainLists: [],
  myLists: [],
};

export const reducer = (
  state: any = initialState,
  action: ActionMain | ActionAdd | ActionDelete,
) => {
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
      console.log(indexT);
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

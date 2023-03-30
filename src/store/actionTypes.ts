import { ILists } from "./actionsTypes.module";

export type ActionMain = {
  type: "MAIN_LIST";
  payload: ILists[];
};
export type ActionAdd = {
  type: "ADD_TO_LIST";
  payload: ILists[];
};
export type ActionDelete = {
  type: "DELETE_FROM_LIST";
  payload: ILists;
};

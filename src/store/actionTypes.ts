import { IMainData } from "./../App";
import { ILists } from "./reducer";
export type ActionMain = {
  type: "MAIN_LIST";
  payload: IMainData[];
};
export type ActionAdd = {
  type: "ADD_TO_LIST";
  payload: IMainData[];
};
export type ActionDelete = {
  type: "DELETE_FROM_LIST";
  payload: ILists;
};

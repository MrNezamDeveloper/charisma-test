import { ILists } from "./actinCreator.module";

import { ActionAdd, ActionDelete, ActionMain } from "./actionTypes";

export const mainList = (data: ILists[]): ActionMain => ({
  type: "MAIN_LIST",
  payload: data,
});

export const addToList = (data: ILists[]): ActionAdd => ({
  type: "ADD_TO_LIST",
  payload: data,
});

export const deleteFromList = (data: ILists): ActionDelete => ({
  type: "DELETE_FROM_LIST",
  payload: data,
});

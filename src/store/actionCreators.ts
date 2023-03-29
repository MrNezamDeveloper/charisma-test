import { ILists } from './reducer';
import { IMainData } from './../App';
import { ActionAdd, ActionDelete, ActionMain } from "./actionTypes";

export const mainList = (data: IMainData[]): ActionMain => ({
  type: "MAIN_LIST",
  payload: data,
});

export const addToList = (data: IMainData[]): ActionAdd => ({
  type: "ADD_TO_LIST",
  payload: data,
});

export const deleteFromList = (data: ILists): ActionDelete => ({
  type: "DELETE_FROM_LIST",
  payload: data,
});

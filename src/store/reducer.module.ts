

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
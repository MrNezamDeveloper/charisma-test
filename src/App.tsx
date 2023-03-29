import React from "react";
import "./App.css";
import Home from "./layouts/Home";
import { useEffect } from "react";
import { getCommentsList } from "./services/comments";
import { useDispatch } from "react-redux";
import { mainList } from "./store/actionCreators";

interface IResponse {
  data: IMainData[];
}
export interface IMainData {
  id?: number;
  name?: number;
  body?: string;
  postId?: number;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCommentsList().then((res: IResponse) => {
      console.log(res);
      dispatch(mainList(res.data));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import HomePage from "./layouts";
import { useEffect } from "react";
import { getCommentsList } from "./services/comments";
import { useDispatch } from "react-redux";
import { mainList } from "./store/actionCreators";
import { IResponse } from "./App.module";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCommentsList().then((res: IResponse) => {
      dispatch(mainList(res.data));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

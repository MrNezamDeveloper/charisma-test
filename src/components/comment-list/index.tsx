import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { List } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import { addToList } from "../../store/actionCreators";
import { ILists, MainListState } from "../../store/reducer.module";

const CommentsList: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const [commentData, setCommentData] = useState<ILists[]>([]);
  const [toggleName, setToggleName] = useState<boolean>(false);
  const [toggleID, setToggleID] = useState<boolean>(false);

  const data = useSelector<MainListState, MainListState["mainLists"]>(
    (state) => state.mainLists,
  );

  const addToMyList = (param: number) => {
    const item: any = data.find((id) => id.id === param);
    console.log(item);
    dispatch(addToList(item));
  };

  useEffect(() => {
    setCommentData(data);
  }, [data]);

  const handleSort = () => {
    setToggleName(!toggleName);
    const sortedData: ILists[] = [...commentData];
    sortedData.sort(function (a: any, b: any) {
      return toggleName
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setCommentData(sortedData);
  };

  const handleSortID = () => {
    setToggleID(!toggleID);
    const sortedData: ILists[] = [...commentData];
    sortedData.sort(function (a: any, b: any) {
      return toggleID ? b.postId - a.postId : a.postId - b.postId;
    });
    setCommentData(sortedData);
  };

  return (
    <div>
      <div>
        <Button variant="outlined" onClick={handleSort} size="small">
          filter name A to z
        </Button>
        <Button variant="outlined" onClick={handleSortID} size="small">
          filter by ID
        </Button>
      </div>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          maxHeight: "90vh",
          overflowY: "scroll",
          bgcolor: "background.paper",
        }}
      >
        {commentData &&
          commentData.map((data: any) => {
            return (
              <>
                <ListItem
                  key={data.id}
                  alignItems="flex-start"
                  onClick={() => addToMyList(data.id)}
                >
                  <ListItemAvatar>ID: {data.postId}</ListItemAvatar>
                  <ListItemText
                    primary={<>Name: {data.name.split(" ")[0]}</>}
                    secondary={data.body}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
      </List>
    </div>
  );
};

export default CommentsList;

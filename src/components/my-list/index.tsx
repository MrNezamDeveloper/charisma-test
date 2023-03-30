import { useDispatch, useSelector } from "react-redux";

import { List } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import { MainListState } from "../../store/reducer.module";
import { deleteFromList } from "../../store/actionCreators";

const MyList: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const mylist = useSelector<MainListState, MainListState["myLists"]>(
    (state) => state.myLists,
  );

  const deleteFromMyList = (param: number) => {
    const item: any = mylist.find((id: any) => id.id === param);
    dispatch(deleteFromList(item));
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 400,
        maxHeight: "90vh",
        overflowY: "scroll",
        bgcolor: "background.paper",
      }}
    >
      {mylist.map((data: any) => {
        return (
          <div key={data.id} onClick={() => deleteFromMyList(data.id)}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={<>Name: {data.name.split(" ")[0]}</>}
                secondary={<>Email: {data.email}</>}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
    </List>
  );
};

export default MyList;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { List, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import { addToList } from "../../store/actionCreators";
import { ILists, MainListState } from "../../store/reducer.module";

const EmailsList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const data = useSelector<MainListState, MainListState["mainLists"]>(
    (state) => state.mainLists,
  );

  const [searchedData, setSearchedData] = useState<ILists[]>(data);

  const addToMyList = (param: number) => {
    const item: any = data.find((id: any) => id.id === param);
    dispatch(addToList(item));
  };

  const handllesearch = (e: any) => {
    const valueChanged = e.target.value;
    const searchedData: ILists[] = [...data];
    const newSearchData: any = searchedData.filter((data: any) =>
      data.email.toLowerCase().match(valueChanged),
    );
    setSearchedData(newSearchData);
  };

  return (
    <div>
      <TextField
        id="filled-basic"
        label="search by Email"
        variant="filled"
        onChange={handllesearch}
      />
      <List
        sx={{
          width: "100%",
          maxWidth: 400,
          maxHeight: "90vh",
          overflowY: "scroll",
          bgcolor: "background.paper",
        }}
      >
        {searchedData.length
          ? searchedData.map((data: any) => {
              return (
                <div key={data.id} onClick={() => addToMyList(data.id)}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<>Name: {data.name.split(" ")[0]}</>}
                      secondary={<>Email: {data.email}</>}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              );
            })
          : data.map((data: any) => {
              return (
                <>
                  <ListItem
                    key={data.id}
                    alignItems="flex-start"
                    onClick={() => addToMyList(data.id)}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<>Name: {data.name.split(" ")[0]}</>}
                      secondary={<>Email: {data.email}</>}
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

export default EmailsList;

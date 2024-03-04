import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "./UserItem";
import { USERS } from "../../contants";
const Search = () => {
  const [people, setPeople] = useState("");
  const [users, setUsers] = useState(USERS);
  const searchPeopleHandler = (e) => {
    setPeople(e.target.value);
  };
  const addFriendHandler = () => {};
  let isSendFriendRequestLoadingHandler = false;
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label="Search"
          value={people}
          onChange={searchPeopleHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack paddingLeft={"1rem"} paddingRight={"1rem"}>
        <List>
          {users.map((user) => (
            <UserItem
              key={user._id}
              user={user}
              handler={addFriendHandler}
              isHandlerLoading={isSendFriendRequestLoadingHandler}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;

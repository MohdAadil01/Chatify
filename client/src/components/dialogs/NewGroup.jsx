import {
  Button,
  Stack,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  selectClasses,
} from "@mui/material";
import React, { useState } from "react";
import UserItem from "./UserItem";
import { USERS } from "../../contants";

function NewGroup() {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState(USERS);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const groupNameHandler = (event) => {
    setGroupName(event.target.value);
  };
  const createHandler = () => {};
  const selectMemberHandler = (_id) => {
    setSelectedMembers((prev) =>
      prev.includes(_id)
        ? prev.filter((currentEl) => currentEl !== _id)
        : [...prev, _id]
    );
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"30rem"} spacing={"1rem"}>
        <DialogTitle variant="h4" textAlign={"center"}>
          New Group
        </DialogTitle>
        <TextField
          label="Group"
          onChange={groupNameHandler}
          value={groupName}
        />
        <Typography paddingTop={"1rem"} paddingBottom={"1rem"} variant="body1">
          Members
        </Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              key={user._id}
              user={user}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack
          direction={"row"}
          spacing={"1rem"}
          paddingTop={"1rem"}
          justifyContent={"space-between"}
        >
          <Button variant="text" color="error">
            Cancel
          </Button>
          <Button variant="contained" onClick={createHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default NewGroup;

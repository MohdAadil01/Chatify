import { Add as AddIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

function UserItem({ user, handler, isHandlerLoading }) {
  const { _id, name, avatar } = user;
  const handlerFunc = () => {};
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems="center"
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar} />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "--webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
          onClick={() => handlerFunc(_id)}
          disabled={isHandlerLoading}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
}

export default memo(UserItem);

import React, { useRef } from "react";
import AppLayout from "../components/Layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { AttachFile, Send } from "@mui/icons-material";
import { MessageInput } from "../components/styles/StyledComponents";
import { MESSAGES, colors } from "../contants";
import FileMenu from "../components/dialogs/FileMenu";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "sender_id",
  name: "Mohd Aadil",
};

function Chat() {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(0,0,0,0.1)"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {MESSAGES.map((message, index) => (
          <MessageComponent key={index} message={message} user={user} />
        ))}
      </Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.2rem",
              rotate: "45deg",
            }}
          >
            <AttachFile />
          </IconButton>
          <MessageInput placeholder="Message..." />
          <IconButton
            type="submit"
            sx={{
              bgcolor: colors.orange,
              rotate: "-45deg",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <Send />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
}

export default AppLayout()(Chat);

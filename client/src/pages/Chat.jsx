import React, { useRef } from "react";
import AppLayout from "../components/Layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { AttachFile, Send } from "@mui/icons-material";
import { MessageInput } from "../components/styles/StyledComponents";
import { colors } from "../contants";

function Chat() {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"gray"}
        height={"90%"}
        sx={{
          overflowY: "hidden",
          overflowY: "auto",
        }}
      >
        {/* render message */}
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
              color: "white",
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
    </>
  );
}

export default AppLayout()(Chat);

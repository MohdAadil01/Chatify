import Title from "../shared/Title";
import { Grid } from "@mui/material";
import React, { lazy } from "react";
import Header from "./Header";
import ChatList from "../chats/ChatList";
import { defaultChatData } from "../../contants";
import { useParams } from "react-router-dom";

function AppLayout() {
  return (WrappedComponent) => {
    return (props) => {
      const params = useParams();
      const { chatId } = params;
      const handleDeleteChat = (e, _id, groupChat) => {
        console.log("hi");
      };
      return (
        <>
          <Title />
          <Header />
          <Grid container height={"calc(100dvh - 4rem)"}>
            <Grid
              item
              sm={4}
              md={3}
              sx={{
                display: { xs: "none", sm: "block" },
              }}
              height={"100%"}
            >
              <ChatList
                chats={defaultChatData}
                chatId={chatId}
                onlineUsers={["1", "2"]}
                handleDeleteChat={handleDeleteChat}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
              <WrappedComponent {...props} />
            </Grid>
            <Grid
              item
              md={4}
              lg={3}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
                padding: "2rem",
                bgcolor: "rgba(0,0,0,0.85)",
              }}
              height={"100%"}
            >
              third
            </Grid>
          </Grid>
        </>
      );
    };
  };
}

export default AppLayout;

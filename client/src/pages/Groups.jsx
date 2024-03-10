import { KeyboardBackspace } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React, { memo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { LinkComponent } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { defaultChatData } from "../contants";

function Groups() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const chatId = useSearchParams()[0].get("group");
  console.log(chatId);
  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        sm={4}
        bgcolor={"gray"}
      >
        <GroupList myGroups={defaultChatData} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
              position: "fixed",
              right: "1rem",
              top: "1rem",
            },
          }}
        >
          <Tooltip title="menu">
            <IconButton onClick={handleMobile}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip title="back">
          <IconButton
            sx={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              color: "white",
              bgcolor: "rgba(0,0,0,0.9)",
              ":hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
            onClick={navigateBack}
          >
            <KeyboardBackspace />
          </IconButton>
        </Tooltip>
      </Grid>
      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList w={"50vw"} myGroups={defaultChatData} chatId={chatId} />
      </Drawer>
    </Grid>
  );
}

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography padding={"1rem"} textAlign={"center"}>
        No Groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <LinkComponent
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) {
          e.preventDefault();
        }
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </LinkComponent>
  );
});

export default Groups;

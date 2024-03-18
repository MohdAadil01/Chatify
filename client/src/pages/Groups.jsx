import {
  Add,
  Delete,
  Done,
  Edit,
  KeyboardBackspace,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React, { memo, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LinkComponent } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { defaultChatData } from "../contants";
import ConfirmDelete from "../components/dialogs/ConfirmDelete";

function Groups() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const navigate = useNavigate();
  const chatId = useSearchParams()[0].get("group");

  const navigateBack = () => {
    navigate("/");
  };

  const groupNameChangeHandler = (e) => {
    setIsEditing(false);
    console.log(groupNameUpdatedValue);
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setGroupName("Group Name");
    setGroupNameUpdatedValue("Group Name");

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEditing(false);
    };
  }, [chatId]);

  const confirmGroupDeleteHandler = () => {
    setOpenDeleteDialog(true);
  };

  const closeDeleteHandler = () => {
    setOpenDeleteDialog(false);
  };
  const addMemberHandler = () => {};

  const deleteHandler = () => {};

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
        {groupName && (
          <>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={"1rem"}
              padding={"3rem"}
            >
              {isEditing ? (
                <>
                  <TextField
                    onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
                  />
                  <IconButton onClick={groupNameChangeHandler}>
                    <Done />
                  </IconButton>
                </>
              ) : (
                <>
                  <Typography variant="h4">{groupName}</Typography>
                  <IconButton onClick={() => setIsEditing(true)}>
                    <Edit />
                  </IconButton>
                </>
              )}
            </Stack>

            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
            >
              {/* Members */}
            </Stack>
            <Stack
              direction={{
                sm: "row",
                xs: "column-reverse",
              }}
              spacing={"1rem"}
              p={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
            >
              <Button
                size="large"
                color="error"
                startIcon={<Delete />}
                onClick={confirmGroupDeleteHandler}
              >
                Delete Group
              </Button>
              <Button
                size="large"
                variant="contained"
                startIcon={<Add />}
                onClick={addMemberHandler}
              >
                Add Member
              </Button>
            </Stack>
          </>
        )}
      </Grid>
      {openDeleteDialog && (
        <>
          <ConfirmDelete
            open={openDeleteDialog}
            handleClose={closeDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </>
      )}
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

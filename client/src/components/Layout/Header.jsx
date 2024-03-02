import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import { lazy } from "react";
import { colors } from "../../contants";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SearchDiaglog = lazy(() => import("../dialogs/Search"));
const NotificationsDialog = lazy(() => import("../dialogs/Notifications"));
const NewGroupDialog = lazy(() => import("../dialogs/NewGroup"));

function Header() {
  const navigate = useNavigate();
  const [isMobile, setMobile] = useState(false);
  const [openNotfication, setOpenNotfication] = useState(false);
  const [isNewGroup, setNewGroup] = useState(false);
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch((prev) => !prev);
  };
  const createNewGroupHandler = () => {
    setNewGroup((prev) => !prev);
  };
  const manageGroupHandler = () => {
    navigate("/groups");
  };
  const logoutHandler = () => {};
  const menubarHandler = () => {
    setMobile((prev) => !prev);
  };
  const notficationHandler = () => {
    setOpenNotfication((prev) => !prev);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: colors.orange,
          }}
        >
          <Toolbar>
            <Typography variant="h6">Chatify</Typography>
            <Box flexGrow={1} />

            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onclick={handleSearch}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onclick={createNewGroupHandler}
              />
              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onclick={manageGroupHandler}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onclick={notficationHandler}
              />
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onclick={logoutHandler}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={menubarHandler}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {openNotfication && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationsDialog />
        </Suspense>
      )}
      {search && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDiaglog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
}

const IconBtn = ({ title, icon, onclick }) => {
  return (
    <Tooltip>
      <IconButton color="inherit" size="large" onClick={onclick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;

import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { Face, AlternateEmail, CalendarMonth } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 180,
          height: 180,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      ></Avatar>
      <ProfileCard heading={"Bio"} text={"text"} icon={<InfoIcon />} />
      <ProfileCard heading={"Username"} text={"text"} icon={<Face />} />
      <ProfileCard heading={"Email"} text={"text"} icon={<AlternateEmail />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-03-03T00:00:02.021Z").fromNow()}
        icon={<CalendarMonth />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {icon && icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"grey"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;

import { CameraAlt, Padding } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";

function Login() {
  // PAGE SWITCH
  const [isLoginPage, setIsLoginPage] = useState(true);
  const pageSwitchHandler = () => {
    setIsLoginPage((prev) => !prev);
  };
  // for login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = (e) => {
    e.preventDefault();
  };

  // let isValidUserName = false;
  // for register
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profileSrc, setProfileSrc] = useState(null);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const bioChangeHandler = (event) => {
    setBio(event.target.value);
  };
  const profilePicChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const signUpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(200, 200, 200, 0.5), rgba(120, 110, 220, 0.5)",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLoginPage ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={loginHandler}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  type="normal"
                  margin="normal"
                  variant="outlined"
                  value={username}
                  onChange={usernameChangeHandler}
                ></TextField>
                {/* {!isValidUserName && (
                  <Typography color="error" variant="caption">
                    username is not valid
                  </Typography>
                )} */}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={passwordChangeHandler}
                ></TextField>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                >
                  Login
                </Button>
                <Typography textAlign={"center"} margin={"1rem"}>
                  {" "}
                  OR
                </Typography>
                <Button
                  // variant="contained"
                  color="primary"
                  type="submit"
                  onClick={pageSwitchHandler}
                  fullWidth
                >
                  Sign up
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={signUpHandler}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={profileSrc}
                  ></Avatar>
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      ":hover": {
                        bgcolor: "rgba(0, 0, 0, 0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAlt />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={profilePicChangeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>

                <TextField
                  required
                  fullWidth
                  label="Name"
                  // type="normal"
                  margin="normal"
                  variant="outlined"
                  value={name}
                  onChange={nameChangeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio}
                  onChange={bioChangeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  // type="normal"
                  margin="normal"
                  variant="outlined"
                  value={username}
                  onChange={usernameChangeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={passwordChangeHandler}
                ></TextField>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                >
                  Sign Up
                </Button>
                <Typography textAlign={"center"} margin={"1rem"}>
                  {" "}
                  OR
                </Typography>
                <Button
                  // variant="contained"
                  color="primary"
                  type="submit"
                  onClick={pageSwitchHandler}
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default Login;

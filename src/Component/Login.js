import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const signupHandler = () => {
    navigate("/signup");
  };
  const passwordHandler = () => [navigate("/forgotpassword")];

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "28ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          padding: "50px",
          margin: "auto",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <AddCircleIcon />
        <h3>Log in</h3>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Passward" variant="outlined" />
        <Button variant="contained">LOGIN</Button>
        <Typography variant="h6" component="h6">
          New User to order!
          <Button variant="text" color="secondary" onClick={signupHandler}>
            Create account !!
          </Button>
        </Typography>
        <Typography variant="h6" component="h6" onClick={passwordHandler}>
          Forgot passward ?
          <Button variant="text" color="secondary">
            Click here !
          </Button>
        </Typography>
      </div>
    </Box>
  );
}

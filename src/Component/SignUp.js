import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import LinearProgress from "@mui/material/LinearProgress";

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate=useNavigate();
  const loginHnadler=()=>{
    navigate("/log" )
  }



  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h3>Sgin Up</h3>

        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>

        <TextField id="outlined-basic" label="UserName" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Passward" variant="outlined" />
        <Button variant="contained">Sign Up</Button>
        <Typography variant="h6" component="h6" onClick={loginHnadler}>
          Already have an account?  
          <Button  color="secondary" >
          go to login !
          </Button>
        </Typography>
      </div>
    </Box>
  );
}

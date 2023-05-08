import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import LinearProgress from "@mui/material/LinearProgress";

export default function ForgotPassword() {
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
        <h3>Forgot password</h3>

        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>

        <TextField id="outlined-basic" label="Email" variant="outlined" />

        <Button variant="contained">Send Link</Button>
      </div>
    </Box>
  );
}

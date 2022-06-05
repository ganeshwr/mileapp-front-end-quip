import "./login.styles.scss";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { maxWidth } from "@mui/system";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://paket.id/home">
        PT. Paket Informasi Digital
      </Link>{" "}
      2021
      {"."} All Rights Reserved
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: 8,
          boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
          borderRadius: "25px",
        }}
      >
        <Grid
          container
          component="main"
          sx={{ height: "auto", borderRadius: "25px" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(bg1.png)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={0}
            square
            sx={{
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          >
            <Typography textAlign={"right"} sx={{marginTop:3,marginRight:3}}>
              <Link href="#" style={{marginRight:10}}>English</Link>
              <Link href="#">Indonesia</Link>
            </Typography>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={Logo}
                alt=""
                style={{ maxWidth: 150, marginBottom: 10 }}
              />
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="orgname"
                  label="Organization Name"
                  name="orgname"
                  autoComplete="orgname"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address or Username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid xs={12} item>
                    Not registered yet?{" "}
                    <Link href="#">
                      {"Contact us"}
                    </Link>{" "}
                    for more info
                  </Grid>
                  <Grid item sx={{marginTop:5}}>
                    Call Us Now: <a href="tel:+62 812-1133-5608">+62 812-1133-5608</a>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Login;

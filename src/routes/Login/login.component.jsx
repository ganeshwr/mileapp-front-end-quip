import "./login.styles.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const translations = {
  eng: {
    login: "Login",
    orgname: "Organization Name",
    orgnamePHolder: "Type and press enter",
    email: "Email Address or Username",
    password: "Password",
    registerLabel1: "Not registered yet?",
    registerLabel2: "Contact us",
    registerLabel3: "for more info",
    callUsLabel: "Call Us Now",
    copyrightLabel: "Copyright",
    rights: "All Rights Reserved",
  },
  indo: {
    login: "Login",
    orgname: "Nama Organisasi",
    orgnamePHolder: "Ketik dan tekan enter",
    email: "Alamat Email atau Username",
    password: "Kata sandi",
    registerLabel1: "Belum terdaftar?",
    registerLabel2: "Hubungi kami",
    registerLabel3: "untuk info lebih lanjut",
    callUsLabel: "Hubungi kami",
    copyrightLabel: "Hak Cipta",
    rights: "All Rights Reserved",
  },
};

const Login = () => {
  const navigate = useNavigate();

  const [inputDisabled, setInputDisabled] = useState(true);
  const [labels, setLabels] = useState(translations.eng);
  const {
    login,
    orgname,
    orgnamePHolder,
    email,
    password,
    registerLabel1,
    registerLabel2,
    registerLabel3,
    callUsLabel,
    copyrightLabel,
    rights,
  } = labels;

  const orgNameChangeHandler = (e) => {
    if (e.key === "Enter") {
      const { value } = e.target;

      setInputDisabled(!(value.length > 0));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    if (data.get("email") === "admin" && data.get("password") === "mileapp") {
      navigate("/locations");
    } else {
      alert("Wrong email or password!");
    }
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
            <Typography
              textAlign={"right"}
              sx={{ marginTop: 3, marginRight: 3 }}
            >
              <Link
                href="#"
                onClick={() => setLabels(translations.eng)}
                style={{ marginRight: 10 }}
              >
                English
              </Link>
              <Link href="#" onClick={() => setLabels(translations.indo)}>
                Indonesia
              </Link>
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
                {login}
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="orgname"
                  label={orgname}
                  name="orgname"
                  autoComplete="orgname"
                  placeholder={orgnamePHolder}
                  onKeyDown={orgNameChangeHandler}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  disabled={inputDisabled}
                  fullWidth
                  id="email"
                  label={email}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  disabled={inputDisabled}
                  fullWidth
                  name="password"
                  label={password}
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
                  {login}
                </Button>
                <Grid container>
                  <Grid xs={12} item>
                    {registerLabel1}{" "}
                    <Link target={"_blank"} href="https://mywa.link/vr0op24n">
                      {registerLabel2}
                    </Link>{" "}
                    {registerLabel3}
                  </Grid>
                  <Grid item sx={{ marginTop: 5 }}>
                    {callUsLabel}:{" "}
                    <Link href="tel:+62 812-1133-5608">+62 812-1133-5608</Link>
                  </Grid>
                </Grid>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mt: 5 }}
                >
                  {copyrightLabel}
                  {" © "}
                  <Link color="inherit" href="https://paket.id/home">
                    PT. Paket Informasi Digital
                  </Link>{" "}
                  2021
                  {"."} {rights}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Login;

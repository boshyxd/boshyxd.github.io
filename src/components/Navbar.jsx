import React from "react";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Alert from "@mui/material/Alert";
import navIcon from "../media/signature.png";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-scroll";
import { height, styled } from "@mui/system";
import { AlertTitle, Stack } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  }));

  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, px: 50, py: 1, maxWidth: "1200px", mx: "auto" }}>
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              variant="filled"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
              severity="info"
            >
              This is a demo website! Not all features are functional.
            </Alert>
          </Snackbar>
        </Collapse>
      </Stack>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <CustomToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              sx={{
                maxHeight: "250px",
                maxWidth: "250px",
                objectFit: "scale-down",
              }}
              src={navIcon}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center"}}
              fontSize={22}
            >
              My Portfolio
            </Typography>
          </Box>
          <ThemeProvider theme={theme}>
            <CustomBox>
              <Link to="home" className="link" smooth>
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link to="experience" className="link" smooth>
                <Typography variant="body1">Experience</Typography>
              </Link>
              <Link to="about" className="link" smooth>
                <Typography variant="body1">About</Typography>
              </Link>
            </CustomBox>
          </ThemeProvider>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

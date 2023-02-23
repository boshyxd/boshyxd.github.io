import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1400px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 4,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          <u>PAGES</u>
        </Typography>
        <ThemeProvider theme={theme}>
        <Link
          to="home"
          className="link"
          smooth
          style={{ color: "white", margin: "0.4rem 0", cursor: "pointer" }}
        >
          <Typography variant="body1">Home</Typography>
        </Link>
        <Link
          to="experience"
          className="link"
          smooth
          style={{ color: "white", margin: "0.4rem 0", cursor: "pointer" }}
        >
          <Typography variant="body1">Experience</Typography>
        </Link>
        <Link
          to="about"
          className="link"
          smooth
          style={{ color: "white", margin: "0.4rem 0", cursor: "pointer" }}
        >
          <Typography variant="body1">About</Typography>
        </Link>
        </ThemeProvider>

        {/* 

        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          Home
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          Experience
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", my: 1, cursor: "pointer" }}
        >
          About
        </Typography> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          <u>SOCIAL</u>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            <a href="https://github.com/boshyxd">GitHub</a>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <EmailIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Email
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <LinkedInIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            LinkedIn
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

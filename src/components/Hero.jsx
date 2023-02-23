import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import reactImg from "../media/herodesign1.svg";

const Hero = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));

  return (
    <Box
      sx={{
        mt: 8,
        mb: 12,
        p: 2,
        maxWidth: "1200px",
        mx: "auto",
      }}
      id="home"
    >
      <Typography
        sx={{ color: "white", textAlign: "center", mb: 1 }}
        variant="h6"
      >
        <CustomTitle variant="h2">Hello, I'm Angus! 👋</CustomTitle>
      </Typography>
      <CustomTitle variant="h1">
        I enjoy{" "}
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #24C6DC, #514A9D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "#007DFF",
          }}
        >
          building
        </span>{" "}
        and{" "}
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #24C6DC, #514A9D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "#007DFF",
          }}
        >
          designing
        </span>{" "}
        for the web.
      </CustomTitle>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 400,
            width: 400,
            mt: 1,
            mb: 1,
          }}
          src={reactImg}
        />
      </Box>
    </Box>
  );
};

export default Hero;

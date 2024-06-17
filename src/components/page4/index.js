import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomCard from "../shared/customCard";
const useStyles = makeStyles({
  rootPage: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-evenly",
    padding: "5vw",
    boxSizing: "border-box",
  },
});
const Page4 = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootPage} id="page">
      <Typography variant="h1">projects.</Typography>
      <Grid container justifyContent={"space-between"}>
        <CustomCard
          title="Acadmik"
          desc="AI powered platform to generate Quizzes from any text, url or document."
          viewLink="https://www.acadmik.me/"
        />
        <CustomCard
          title="Giggle Matrix"
          desc="AI generated art collection website, with Search by Image feature, using vector search."
          viewLink="https://gigglematrix.tech/"
        />
        <CustomCard
          title="Chat2Chart"
          desc="WebApp to plot chart on data using text prompt powered by openAI"
          viewLink="https://chat2chart.netlify.app/"
        />
        <CustomCard
          title="Ed. Address"
          desc="React Website to help find nearby tutions, Developed using MERN Stack."
          viewLink="https://edaddress.netlify.app/"
        />
      </Grid>
    </div>
  );
};

export default Page4;

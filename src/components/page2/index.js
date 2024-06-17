import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import React from "react";
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
const Page2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootPage} id="page">
      <Typography variant="h1">about.</Typography>
      <p style={{ fontFamily: "raleway", lineHeight: 2 }}>
        Full Stack Developer with a strong expertise in React and substantial
        experience in back-end development using Node and Flask. Experienced in
        developing projects facilitating data visualization and enhancing
        financial analysis capabilities, crafting responsive interfaces, and
        dedicated to leveraging technology to solve complex challenges and
        deliver user-centric solutions.
      </p>
      <Timeline position="alternate" sx={{ flexGrow: 0, padding: 0 }}>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body1">
            2024-Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Associate Software Engineer - 2
            </Typography>
            <Typography sx={{ color: "red" }}>
              HighRadius Corporation
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body1">
            2022-2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Associate Software Engineer - 1
            </Typography>
            <Typography sx={{ color: "red" }}>
              HighRadius Corporation
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body1">
            2018-22
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              B.Tech (Information Technology)
            </Typography>
            <Typography sx={{ color: "red" }}>9.62 CGPA</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body1">
            2015-17
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Intermediate
            </Typography>
            <Typography sx={{ color: "red" }}>7.46 CGPA</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            align="right"
            variant="body1"
            sx={{ m: "auto 0" }}
          >
            2013-15
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              High School
            </Typography>
            <Typography sx={{ color: "red" }}>9.2 CGPA</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Page2;

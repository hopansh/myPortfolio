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
        Highly motivated and versatile Full Stack Developer with a strong focus
        on React.js and experience in backend development with Node.js and
        Flask. Bringing a solid track record of delivering robust and
        userfriendly web applications. Currently am working as an Associate
        Software Engineer at HighRadius Corporation.
      </p>
      <Timeline position="alternate" sx={{ flexGrow: 0, padding: 0 }}>
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
              Inter College
            </Typography>
            <Typography sx={{ color: "red" }}>7.46 CGPA</Typography>
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
            2022-Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Associate Software Engineer
            </Typography>
            <Typography sx={{ color: "red" }}>
              HighRadius Corporation
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Page2;

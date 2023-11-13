import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  rootPage: {
    height: "100vh",
    width: "100vw",
    background: "black",
    color: "white",
    padding: "5vw",
    boxSizing: "border-box",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
  },
  languages: {
    marginTop: "4rem",
    display: "flex",
    justifyContent: "space-evenly",
    gap: "4rem",
    flexWrap: "wrap",
  },
  languageIcon: {
    height: "5rem",
    width: "5rem",
  },
});
const Page3 = () => {
  const classes = useStyles();
  const languages = [
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
      name: "HTML",
    },
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
      name: "CSS",
    },
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
      name: "JavaScript",
    },
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
      name: "Typescript",
    },
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
      name: "React",
    },
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
      name: "NodeJs",
    },
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flutter/flutter.png",
      name: "Flutter",
    },
    {
      src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
      name: "MongoDb",
    },
    {
      src: "https://img.icons8.com/color/96/000000/mysql-logo.png",
      name: "MySQL",
    },
    {
      src: "https://img.icons8.com/color/96/000000/bootstrap.png",
      name: "Bootstrap",
    },
    {
      src: "https://img.icons8.com/color/96/000000/material-ui.png",
      name: "Material UI",
    },
    {
      src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      name: "Ant Design",
    },
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png",
      name: "Git",
    },
  ];
  return (
    <div className={classes.rootPage} id="page">
      <Typography variant="whiteH1">
        languages / frameworks / libraries.
      </Typography>
      <br />
      <div className={classes.languages}>
        {languages.map((lang, index) => (
          <div key={index}>
            <img
              src={lang?.src}
              className={classes.languageIcon}
              alt={lang?.name}
            />
            <h5 style={{ textAlign: "center", fontFamily: "Raleway" }}>
              {lang?.name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;

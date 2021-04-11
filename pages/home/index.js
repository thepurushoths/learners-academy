import React from "react";
import HomePage from "./HomeIndex";
import MainHome from "../../components/Layout/MainHome";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
  },
}));

export default function Home(props) {
  console.log("121 happy now");
  const classes = useStyles();
  return (
    <Grid overflow="hidden" className={classes.root}>
      <MainHome>
        <HomePage />
      </MainHome>
    </Grid>
  );
}

import React from "react";

import { makeStyles } from "@material-ui/core/styles";

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function QuestionairePage() {
  const classes = useStyles();

  return <div className={classes.root}>ABC</div>;
}

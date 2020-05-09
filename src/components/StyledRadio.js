import React from "react";
import clsx from "clsx";
import {
  Radio
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  Icon: {
    borderRadius: "50%",
    width: 14,
    height: 14,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#FFFFFF",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  CheckedIcon: {
    backgroundColor: "#FFFFFF",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 14,
      height: 14,
      backgroundImage: "radial-gradient(#0099FF,#0099FF 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}));

function StyledRadio(props) {
  const classes = useStyles();
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.Icon, classes.CheckedIcon)} />}
      icon={<span className={classes.Icon} />}
      {...props}
    />
  );
}

export default StyledRadio
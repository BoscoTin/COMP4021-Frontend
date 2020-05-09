import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Grid,
  Typography,
  Button,
  Box,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

import Questions from "../src/components/demo/questions";

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    height: "100vh",
    width: "100vw",
    padding: "10%",
  },
  expand_h: {
    height: "100%",
  },
  expand_w: {
    width: "100%",
  },
  font_roboto: {
    fontFamily: "Roboto",
  },
  lineh_130: {
    lineHeight: 1.3,
  },

  LeftLayer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
  RightLayer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  ChoiceRoot: {
    display: "flex",
    justifyContent: "space-between",
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
  const classes = props.css;
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

function Paginator({ classes, page, setPage }) {}

function LeftLayer({ classes }) {
  return (
    <div
      className={clsx(classes.LeftLayer, classes.expand_h, classes.expand_w)}
    >
      <Typography variant="h4">
        <span className={clsx(classes.lineh_130, classes.font_roboto)}>
          <strong>Let Us Start With Your Personality Test</strong>
        </span>
      </Typography>
      <br />
      <Typography variant="body1" color="textSecondary">
        <span className={clsx(classes.lineh_130, classes.font_roboto)}>
          Tell us more about your value, your style and your personality
        </span>
      </Typography>
    </div>
  );
}

class RightLayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page : 1,
      choices : Array.from(Questions, () => -1)
    }
  }


  makeChoice = (q_no, choice) => {
    var array = this.state.choices;
    array[q_no] = parseInt(choice);
    this.setState({
      choices: array
    });
  }

  onListTileClick = (ev) => {
    const { page, choices } = this.state
    if (ev.target.value === choices[page - 1]) {
      this.makeChoice(page - 1, -1);
    } else {
      this.makeChoice(page - 1, ev.target.value);
    }
  }

  render(){
    const { classes } = this.props
    const { page, choices } = this.state
    const q_data = Questions[page - 1].answers
    return (
      <div
        className={clsx(classes.RightLayer, classes.expand_h, classes.expand_w)}
      >
        <Typography variant="body1" color="textPrimary">
          <span className={clsx(classes.font_roboto)}>{page} of 6</span>
        </Typography>
        <Typography variant="h4" color="textPrimary">
          <span className={clsx(classes.lineh_130, classes.font_roboto)}>
            <strong>{Questions[page - 1].question}</strong>
          </span>
        </Typography>
  
        <RadioGroup value={choices[page - 1]} onChange={this.onListTileClick}>
          {q_data.map((anss, index) => {
            return (
              <FormControlLabel
                key={page + index}
                label={anss.content}
                labelPlacement="start"
                value={index}
                control={
                  <StyledRadio
                    css={classes}
                    checked={index === choices[page - 1]}
                  />
                }
                classes={{
                  root: classes.ChoiceRoot,
                }}
              />
            );
          })}
        </RadioGroup>
  
        {/*<Paginator page={page} setPage={setPage} /> */}
      </div>
    );
  }
}

export default function QuestionairePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={clsx(classes.expand_h, classes.expand_w)}>
        <Grid item xs={4} className={classes.expand_h}>
          <LeftLayer classes={classes} />
        </Grid>
        <Grid item xs={8} className={classes.expand_h}>
          <RightLayer classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

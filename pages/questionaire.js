import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
    Grid,
    Typography,
    Button,
    RadioGroup,
    FormControlLabel,
    Box
} from "@material-ui/core";
import StyledRadio from "../src/components/StyledRadio";
import Questions from "../src/components/demo/questions";
import Link from "../src/components/Link";

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    height: "120vh",
    width: "100vw",
    padding: "10%",
  },
  expand_h: {
    height: "100%",
  },
  expand_w: {
    width: "100%",
  },
  font_roboto_style1: {
    fontFamily: "Roboto",
    fontSize:"36px",
  },
  font_roboto_style2:{
    fontFamily: "Roboto",
    fontSize:"20px",
  },
  lineh_130: {
    lineHeight: 1.3,
  },
  box_marginTop:{
    marginTop:"40%",
  },
  box_marginTop2:{
    marginTop:"10%",
  },
  font_roboto_Box1:{
    marginLeft:"12%",
    marginRight:"12%"
  },
  font_roboto_Box2:{
    marginLeft:"10%",
    marginRight:"15%",
  },
  radio_group:{
    marginLeft:"10%",
    marginRight:"15%",
    boxShadow: "0px 2px 4px rgba(96, 97, 112, 0.16), 0px 0px 1px rgba(40, 41, 61, 0.04)",
    borderRadius: "6px"
  },
  button_location:{
    marginLeft:"45%",
  },
  button_color:{
    backgroundColor:"#6984E2"
  },
  questions_marginButtom:{
    marginBottom:"5%"
  },

  LeftLayer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    borderRadius:"12px 0px 0px 12px"
  },
  RightLayer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    borderRadius:"0px 12px 12px 0px"
  },
  ChoiceRoot: {
    display: "flex",
    justifyContent: "space-between",
    marginTop:"2%",
    marginRight:"3%",
    marginBottom:"2%"
  },
  PaginatorRoot: {
    justifyContent: "flex-end",
    marginLeft:"10%",
    marginTop:"5%"
  },
}));

function Paginator({ classes, page, setPage }) {
  return (
    <div className={clsx(classes.expand_w, classes.PaginatorRoot)}>
      {page !== 1 && (
        <Button
          color="inherit"
          variant="contained"
          onClick={() => setPage(page - 1)}
        >
          PREV
        </Button>
      )}
      {page === 1 && (
          <Button/>
      )}
      {page > 0 && (
          <Button

              href="/"
              component={Link}
              className={classes.button_location}
          >
            <Box color={"#979797"}>
              CANCEL
            </Box>
          </Button>
      )}
      {page !== Questions.length && (
          <Button
              color={"#FFFFFF"}
              variant="contained"
              onClick={() => setPage(page + 1)}
              className={classes.button_color}
          >
            <Box color={"#FFFFFF"}>
              NEXT
            </Box>
          </Button>
      )}
      {page === Questions.length && (
          <Button
              variant="contained"
              href="/"
              component={Link}
              className={classes.button_color}>
            <Box color={"#FFFFFF"}>
              NEXT
            </Box>
          </Button>
      )}
    </div>
  );
}

function LeftLayer({ classes }) {
  return (
    <div
      className={clsx(classes.LeftLayer, classes.expand_h, classes.expand_w)}
    >
      <Typography variant="h4" className={clsx(classes.font_roboto_Box1,classes.box_marginTop)}>
        <span className={clsx(classes.lineh_130, classes.font_roboto_style1)}>
          <strong>Let Us Start With Your Personality Test</strong>
        </span>
      </Typography>
      <br />
      <Typography variant="body1" color="textSecondary" className={classes.font_roboto_Box1}>
        <span className={clsx(classes.lineh_130, classes.font_roboto_style2)}>
          Tell us more about your value, your style and your personality
        </span>
      </Typography>
    </div>
  );
}

class RightLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      choices: Array.from(Questions, () => -1),
    };
  }

  setPage = (page) => {
    if (page > 0 && page <= Questions.length) {
      this.setState({
        page: page,
      });
    }
  };

  makeChoice = (q_no, choice) => {
    var array = this.state.choices;
    array[q_no] = parseInt(choice);
    this.setState({
      choices: array,
    });
  };

  onListTileClick = (ev) => {
    const { page, choices } = this.state;
    if (ev.target.value === choices[page - 1]) {
      this.makeChoice(page - 1, -1);
    } else {
      this.makeChoice(page - 1, ev.target.value);
    }
  };

  render() {
    const { classes } = this.props;
    const { page, choices } = this.state;
    const q_data = Questions[page - 1].answers;
    return (
      <div
        className={clsx(classes.RightLayer, classes.expand_h, classes.expand_w)}
      >
        <Typography variant="body1" color="textPrimary" className={classes.box_marginTop2}>
          <span className={clsx(classes.font_roboto,classes.font_roboto_Box2)}>
            {page} of 6
          </span>
        </Typography>
        <Typography variant="h6" color="textPrimary" className={classes.questions_marginButtom}>
          <span className={clsx(classes.lineh_130, classes.font_roboto,classes.font_roboto_Box2 )}>
            <strong>{Questions[page - 1].question}</strong>
          </span>
        </Typography>

        <RadioGroup value={choices[page - 1]} onChange={this.onListTileClick} className={classes.radio_group}>
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

        <Paginator classes={classes} page={page} setPage={this.setPage} />
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

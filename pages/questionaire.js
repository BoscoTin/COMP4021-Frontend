import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import {
    Grid,
    Typography,
    Button
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Link from "../src/components/Link";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";



/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
    Root:{
        backgroundColor: "#8199EE",
        border: "1px solid #979797",
        position: "relative",
        width: "1600px",
        height: "1024px"
    },
    rightLayer:{
      position: "absolute",
      left: "11.38%",
      right: "11.44%",
      top: "15.14%",
      bottom: "15.14%",
      width:"77.2%",
      background: theme.palette.text.secondary,
      borderRadius:"12px",
    }, rightLayerContent1:{
        position: "absolute",
        width: "47.5%",
        height: "14%",
        left: "38.9%",
        top: "16.8%"
    }, rightLayerButton1:{
        position: "absolute",
        width: "5%",
        height: "2.2%",
        left: "69.3%",
        top: "79.8%",
        background:theme.palette.text.secondary
    }, rightLayerButton2:{
        position: "absolute",
        width: "7.6%",
        height: "5%",
        left: "76%",
        top: "78.4%",
        background: "#6984E2"
    }, rightLayerButtonBoxContainer:{
        position: "absolute",
        width: "44.7%",
        height: "40.3%",
        left: "38.9%",
        top: "32.2%",
        background:"#FFFFFF",
        boxShadow: "0px 2px 4px rgba(96, 97, 112, 0.16), 0px 0px 1px rgba(40, 41, 61, 0.04)",
        borderRadius: "6px"
    },rightLayerButtonTitleContainer:{
        width: "93%",
        height: "34.7%",
    },rightLayerButtonTitle:{
        width: "140.55px",
        height: "24px",
        marginTop:"13px",
        marginLeft:"16px",
        marginBottom:"11px"
    },

    leftLayer:{
      width: "30.5%",
      height: "100%",
      borderRadius:"12px 0px 0px 12px",
      background: "#6984E2",
      position: "absolute"
    }, leftLayerContext1:{
    position: "absolute",
    width:"67.9%",
    height:"19.7%",
    left:"14.9%",
    top:"25.8%",
    }, leftLayerContext2:{
    position: "absolute",
    width:"67.9%",
    height:"10.9%",
    left:"14.9%",
    top:"49.6%",
    },

    ButtonRoot: {
        marginTop:"45%",
        '&:hover': {
          backgroundColor: 'transparent',
        },
    }, Icon: {
        borderRadius: '50%',
        width: 14,
        height: 14,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#FFFFFF',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    }, CheckedIcon: {
        backgroundColor: '#FFFFFF',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 14,
            height: 14,
            backgroundImage: 'radial-gradient(#0099FF,#0099FF 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
}));

function BackGround(props){
  const {classes} = props;
  return (
      <Grid container className={classes.Root}>
        <RightLayer classes = {classes} />
      </Grid>
  );
}

function LeftLayer(props){
  const {classes} = props;
  return (
      <Grid container className = {classes.leftLayer}>

          <Grid container className = {classes.leftLayerContext1}>
              <Grid item >
                  <Typography variant="h4" color="#000000">
                      <Box fontFamily={"Asap"}
                           fontStyle={"normal"}
                           fontWeight={"normal"}
                           fontSize={"36px"}
                           lineHeight={"130%"}>
                          Let Us Start With Your Personality Test
                      </Box>
                  </Typography>
              </Grid>
          </Grid>

          <Grid container className = {classes.leftLayerContext2}>
              <Grid item >
                  <Typography color="textSecondary" >
                      <Box fontFamily={"Asap"}
                         fontStyle={"normal"}
                         fontWeight={"normal"}
                         fontSize={"20px"}
                         lineHeight={"130%"}>
                          Tell us more about your
                      </Box>

                      <Box fontFamily={"Asap"}
                           fontStyle={"normal"}
                           fontWeight={"normal"}
                           fontSize={"20px"}
                           lineHeight={"130%"}>
                          value, your style and your personality
                      </Box>
                  </Typography>
              </Grid>
          </Grid>

      </Grid>
  );
}

function RightLayer(props){
  const {classes} = props;
  return (
      <Grid container className = {classes.rightLayer}>

          <LeftLayer classes = {classes} />

          <Grid container className={classes.rightLayerContent1}>
              <Typography>
                  <Box fontFamily={"Roboto"} fontStyle={"normal"}
                     fontWeight={"normal"}
                     fontSize={"18px"}
                     lineHeight={"40px"}
                     color={"#D5DDE3"}>
                    1 of 6
                  </Box>

                  <Box fontFamily={"Roboto"}
                     fontStyle={"normal"}
                     fontWeight={"normal"}
                     fontSize={"22px"}
                     lineHeight={"40px"}
                     color={"#000"}>
                    How would you describe yourself? Active or Passive
                  </Box>
              </Typography>

          </Grid>

          <Button1 classes = {classes}/>
          <Button2 classes = {classes}/>
          <CheckBox classes = {classes}/>
      </Grid>
  );
}

function StyledRadio(props) {
    const classes = useStyles();
    return (
        <Radio
            className={classes.ButtonRoot}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.Icon, classes.CheckedIcon)} />}
            icon={<span className={classes.Icon} />}
            {...props}
        />
    );
}


function CheckBox(props){
  const {classes} = props;
  const [value, setValue] = React.useState("female");
  const buttonNames = [
      {id:1,content:"option1"},
      {id:2,content:"option2"},
      {id:3,content:"option3"},
      {id:4,content:"option4"},
      {id:5,content:"option5"},
      {id:6,content:"option6"},
  ];

  const button=[
      {id:"option1",value:"option1"},
      {id:"option2",value:"option2"},
      {id:"option3",value:"option3"},
      {id:"option4",value:"option4"},
      {id:"option5",value:"option5"},
      {id:"option6",value:"option6"},
  ]

  function handleClick(event) {
      if (event.target.value === value) {
          setValue("");
      } else {
          setValue(event.target.value);
      }
  }

  function RightLayerButtonTitleBox(props){
      const classes = useStyles();
      return(
          <Box
              className={classes.rightLayerButtonTitle}
              fontFamily= "Roboto"
              fontStyle={"normal"}
              fontWeight={"normal"}
              fontSize= "14px"
              lineHeight= "24px"
              {...props}/>
              );
  }

  return(
      <Grid container className={classes.rightLayerButtonBoxContainer} >
          <Box className={classes.rightLayerButtonTitleContainer} display={"flex"} flexDirection={"column"}>
              {buttonNames.map((e) => <RightLayerButtonTitleBox key={e.id} children={e.content} />) }
          </Box>
          <FormControl component="fieldset" >
              <RadioGroup
                  className={classes.group}
                  value={value}>
                  {button.map((e) => <FormControlLabel
                      id={e.id}
                      value={e.value}
                      control={<StyledRadio onClick={handleClick} />}
                  />)}
              </RadioGroup>
          </FormControl>
      </Grid>
  );
}

function Button1(props){
  const {classes} = props;
  return (
      <Button
          className={classes.rightLayerButton1}
          href="/signup"
          component={Link}>
        <Typography color={"#979797"}>CANCEL</Typography>
      </Button>
  );
}
function Button2(props){
  const {classes} = props;
  return (
      <Button
          className={classes.rightLayerButton2}
          href="/signup"
          component={Link}
          variant="contained">
        <Typography variant="button" color="textSecondary">NEXT</Typography>
      </Button>
  );
}

export default function QuestionairePage() {
  const classes = useStyles();
  return <BackGround classes = {classes} />;
}
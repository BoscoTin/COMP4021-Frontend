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
    root:{

    },
  Background:{
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
      background: theme.palette.text.secondary,
      borderRadius:"12px",
      width:"1235px"
  }, rightLayerContent1:{
        position: "absolute",
        width: "587px",
        height: "100px",
        left: "480px",
        top: "120px"
  }, rightLayerButton1:{
        position: "absolute",
        width: "62px",
        height: "16px",
        left: "856px",
        top: "570px",
        background:theme.palette.text.secondary
  }, rightLayerButton2:{
        position: "absolute",
        width: "94px",
        height: "36px",
        left: "938px",
        top: "560px",
        background: "#6984E2"
  }, rightLayerButtonBoxContainer:{
        position: "absolute",
        width: "552px",
        height: "288px",
        left: "480px",
        top: "230px",
        background:"#FFFFFF",
        boxShadow: "0px 2px 4px rgba(96, 97, 112, 0.16), 0px 0px 1px rgba(40, 41, 61, 0.04)",
        borderRadius: "6px"
  },rightLayerButtonTitleContainer:{
          width: "300px",
          height: "248px",
          left: "3px"
    },rightLayerButtonTitle:{
          width: "140.55px",
          height: "24px",
          marginTop:"13px",
          marginLeft:"16px",
          marginBottom:"11px"
  }, rightLayerButton:{
          top:"6.25%",
          left:"93.75%",
          icon:"#0099FF"
  },

  leftLayer:{
    position: "absolute",
    width: "377px",
    height: "714px",
    borderRadius:"12px 0px 0px 12px",
    background: "#6984E2"
  }, leftLayerContext1:{
    position: "absolute",
    width:"256px",
    height:"141px",
    left:"56px",
    top:"184px",
  }, leftLayerContext2:{
    position: "absolute",
    width:"257px",
    height:"78px",
    left:"55px",
    top:"354px",
  },

  ButtonRoot: {
      marginTop:"14px",
      left:"219px",
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
      <Grid container className={classes.Background}>
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
              font-style={"normal"}
              fontWeight={"normal"}
              fontSize= "14px"
              lineHeight= "24px"
              {...props}/>
              );
  }

  return(
      <Grid container className={classes.rightLayerButtonBoxContainer} >
          <Box className={classes.rightLayerButtonTitleContainer} display={"flex"} flexDirection={"column"}>
              <RightLayerButtonTitleBox>
                  Helsinki
              </RightLayerButtonTitleBox>

              <RightLayerButtonTitleBox>
                  Helsinki
              </RightLayerButtonTitleBox>

              <RightLayerButtonTitleBox>
                  Helsinki
              </RightLayerButtonTitleBox>

              <RightLayerButtonTitleBox>
                  Helsinki
              </RightLayerButtonTitleBox>

              <RightLayerButtonTitleBox>
                  Helsinki
              </RightLayerButtonTitleBox>

              <RightLayerButtonTitleBox>
                  Helsinki
              </RightLayerButtonTitleBox>
          </Box>
          <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                  className={classes.group}
                  value={value}>
                  <FormControlLabel
                      value="female"
                      control={<StyledRadio onClick={handleClick} />}
                  />
                  <FormControlLabel
                      value="male"
                      control={<StyledRadio onClick={handleClick} />}
                  />
                  <FormControlLabel
                      value="other"
                      control={<StyledRadio onClick={handleClick} />}
                  />
                  <FormControlLabel
                      value="1"
                      control={<StyledRadio onClick={handleClick} />}
                  />
                  <FormControlLabel
                      value="2"
                      control={<StyledRadio onClick={handleClick} />}
                  />
                  <FormControlLabel
                      value="3"
                      control={<StyledRadio onClick={handleClick} />}
                  />
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
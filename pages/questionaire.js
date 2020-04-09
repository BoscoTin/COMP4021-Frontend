import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  GridList,
  GridListTile,
} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.text.primary,
    width:"1600px",
    height:"1024px",
    flexGrow:1
  },
  Layer: {
    background: "#FFFFFF",
    position: "absolute",
    width: "1235px",
    height: "774px",
    borderRadius:"12px",
    left:"182px",
    top:"155px"
  },
  leftLayer:{
    background: theme.palette.primary.main,
    width: "377px",
    height: "774px",
    borderRadius:"12px 0px 0px 12px"
  },
  leftLayerContext1:{
    position: "absolute",
    backgroundColor: theme.palette.primary.main,
    width:"256px",
    height:"141px",
    left:"56px",
    top:"184px"
  },
  leftLayerContext2:{
    position: "absolute",
    backgroundColor: theme.palette.primary.main,
    width:"257px",
    height:"78px",
    left:"55px",
    top:"354px"
  },
  rightLayerContent1:{
    position:"absolute",
    width: "587px",
    height: "100px",
    left: "480px",
    top: "120px",
  },
  rightLayerContent2:{
    position: "absolute",
    width: "546px",
    height: "288px",
    top: "230px",
    left: "483px"
  },
  rightLayerContent2CheckBox1:{
    position: "absolute",
    width: "546px",
    height: "48px"
  }
}));

function Layer(props) {
  const { classes }= props;
  return(
      <Grid containerBase className = {classes.root}>

          <Grid container0 className = {classes.Layer} >


            <Grid container1 className = {classes.leftLayer}>
              <Grid container2 className = {classes.leftLayerContext1}>
                <Grid item xs={10} md={12} >
                  <Typography variant="h5" color="#000000">
                    Let Us Start <br />With Your<br />Personality Test
                  </Typography>
                </Grid>
              </Grid>

              <Grid container2 className = {classes.leftLayerContext2}>
                <Grid item2 xs={10} md={12}>
                  <Typography color="textSecondary" >
                    Tell us more about your <br/>value, your style and your personality
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container3 className = {classes.rightLayerContent1}>
              <Typography color= "#858585" >
                1 of 6
              </Typography>
              <br/>
              <Typography color= "#000000" >
                How would you describe yourself? Active or Passive
              </Typography>
            </Grid>

            <Grid container4 className = {classes.rightLayerContent2}>
              <Typography color= "#000000" >
                test
              </Typography>
            </Grid>

          </Grid>

      </Grid>
  );
}



export default function QuestionairePage() {
  const classes = useStyles();

  return (
      <Layer classes = {classes}/>
  );
}

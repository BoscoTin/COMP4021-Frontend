import React from "react";
import clsx from "clsx";

import PublicLayout from "../src/components/Layout/public/PublicLayout";
import Link from "../src/components/Link";
import LatestCard from "../src/components/prefabs/People/IndexPagePeopleCard";
import EventCard from "../src/components/EventCard";

import EventsDemo from "../src/components/demo/events";
import LPostsDemo from "../src/components/demo/latestposts";

import {
  Grid,
  Typography,
  Button,
  GridList,
  GridListTile,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Box from "@material-ui/core/Box";

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
  fullwidth: {
    width: "100%",
  },
  responsive_padding: {
    /* responsive layout: < breakpoint md use down */
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
  },
  round_block: {
    borderRadius: theme.spacing(3),
  },
  first_bg: {
    backgroundColor: theme.palette.primary.main,
  },
  second_transparent_bg: {
    backgroundColor: fade(theme.palette.secondary.main, 0.15),
  },

  gitem: {
    padding: theme.spacing(5),
    marginLeft:"5%"
  },
  startButton: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    marginBottom:"5%",
    width: "35%",
    height: "60px"
  },
  latest_post:{
    marginLeft:"9%",
    marginRight:"9%",
    width:"82%"
  },
  explore:{
    marginLeft:"7%",
    marginRight:"9%",
    width:"93%",
    borderRadius:"50px"
  },
  AI_block:{
    marginLeft:"11%",
    marginRight:"9%",
    width:"80%",
  },
  AI_block_pic:{
    marginTop:"4%"
  },
  Top_Layer:{
    marginLeft:"6%",
    marginBottom:"5%",
    width:"95%"
  },

  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",

  },
}));

function TopLayer(props) {
  const { classes } = props;

  return (
    <Grid
      container
      className={clsx(classes.responsive_padding,classes.Top_Layer)}
      alignItems="flex-end"
    >
      <Grid item xs={12} md={5}>
        <Box fontFamily={"Asap"} color="textPrimary" fontSize={"80px"} fontWeight={"bold"}>
          Build your dream team now.
        </Box>
        <br />
        <Box fontFamily={"Asap"} color="textPrimary" fontSize={"18px"} align="justify"
             style={{maxWidth:"75%",marginBottom:"5%"}}>
          We are here for you to find your partner to build the team you need
          for your startup.
        </Box>
        <br />
        <Button
          className={classes.startButton}
          href="/signup"
          component={Link}
          variant="contained"
        >
          <Box fontFamily={" Asap"}
               fontWeight={"bold"}
               fontSize={"18px"}
               line-height={"160%"}
               color="#FFFFFF">
            Start now
          </Box>
        </Button>
      </Grid>

      <Grid item xs={12} md={7}>
        <img className={classes.fullwidth} src="padding_1.svg" />
      </Grid>
    </Grid>
  );
}

function AIBlock(props) {
  const { classes } = props;

  return (
    <Grid
      container
      className={clsx(
          classes.responsive_padding,
          classes.round_block,
          classes.second_transparent_bg,
          classes.AI_block
      )}
    >
      <Grid item xs={12} md={5} className={classes.AI_block_pic}>
        <img className={classes.fullwidth} src="padding_2.svg" />
      </Grid>

      <Grid item xs={12} md={6} className={classes.gitem}>
        <Box fontFamily={"Helvetica"} color="textPrimary" fontWeight={"bold"} fontSize={"40px"}>
          Let our AI help you finding your potential partner.
        </Box>
        <br />
        <Typography variant="body1" align="justify">
          The team is the key to make your fresh company strong and stable, use
          our platform to start finding your talents and buid your best team
        </Typography>
      </Grid>
    </Grid>
  );
}

function Explore(props) {
  const { classes } = props;

  return (
    <Grid container spacing={4}
          className={clsx(classes.responsive_padding, classes.explore)}>
      <Grid item xs={12}>
        <Box style={{marginRight:"6%"}} align="center"
             fontFamlty={"Helvetica"} fontSize={"40px"} fontWeight={"bold"}>
          <strong>Events</strong>
        </Box>
        <br />
        <Box align="center" style={{maxWidth:"52%",marginLeft:"21%"}}
             fontFamily={"Avenir"} fontSize={"18px"} fontWeight={"500"} color={"#4B5D68"}>
          Explore the events nearby for more opportunities and challenges for
          you and your team
        </Box>
      </Grid>

      {EventsDemo.map((event) => (
        <Grid item key={event.id} xs={12} md={6} style={{marginBottom:"5%"}}>
          <EventCard data={event} />
        </Grid>
      ))}
    </Grid>
  );
}

function LatestPosts(props) {
  const { classes } = props;

  return (
    <div
      className={clsx(
          classes.round_block,
          classes.responsive_padding,
          classes.first_bg,
          classes.latest_post
      )}
    >
      <Typography variant="h4" color="textSecondary"
                  style={{marginTop:"5%", marginBottom:"5%", marginLeft:"3%"}}>
        <strong>Latest Post</strong>
      </Typography>
      <br />
      <GridList
        className={classes.gridList}
        spacing={20}
        cols={2.5}
        cellHeight="auto"
      >
        {LPostsDemo.map((post) => (
          <GridListTile key={post.id} style={{marginLeft:"3%",marginRight:"-3%",marginBottom:"3%"}}>
            <LatestCard data={post} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default function Index() {
  const classes = useStyles();
  return (
    <PublicLayout title="Index Page">
      {/* 
        Apply public layout and pass the contents 
        Refer to src/components/layout/PublicLayout
        for complete implementation of layout
      */}
      <TopLayer classes={classes} />

      <AIBlock classes={classes} />
      <a name={"explore"}>
        <Explore classes={classes} />
      </a>
      <LatestPosts classes={classes} />
    </PublicLayout>
  );
}

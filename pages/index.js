import React from "react";
import clsx from "clsx";

import PublicLayout from "../src/components/Layout/public/PublicLayout";
import Link from "../src/components/Link";
import LatestCard from "../src/components/PeopleCard";
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
  },
  startButton: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
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
      className={classes.responsive_padding}
      alignItems="flex-end"
    >
      <Grid item xs={12} md={4}>
        <Typography variant="h3" color="textPrimary">
          Build your dream team now.
        </Typography>
        <br />
        <Typography variant="body1" align="justify">
          We are here for you to find your partner to build the team you need
          for your startup.
        </Typography>
        <br />
        <Button
          className={classes.startButton}
          href="/signup"
          component={Link}
          variant="contained"
        >
          <Typography variant="button" color="textSecondary">
            Start now
          </Typography>
        </Button>
      </Grid>

      <Grid item xs={12} md={8}>
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
        classes.second_transparent_bg
      )}
    >
      <Grid item xs={12} md={5}>
        <img className={classes.fullwidth} src="padding_2.svg" />
      </Grid>

      <Grid item xs={12} md={7} className={classes.gitem}>
        <Typography variant="h4" color="textPrimary">
          Let our AI help you finding your potential partner.
        </Typography>
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
    <Grid container spacing={4} className={clsx(classes.responsive_padding)}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          <strong>Events</strong>
        </Typography>
        <br />
        <Typography variant="body1" align="center">
          Explore the events nearby for more opportunities and challenges for
          you and your team
        </Typography>
      </Grid>

      {EventsDemo.map((event) => (
        <Grid item key={event.id} xs={12} md={6}>
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
        classes.first_bg
      )}
    >
      <Typography variant="h4" color="textSecondary">
        <strong>Latest Post</strong>
      </Typography>
      <br />
      <GridList
        className={classes.gridList}
        spacing={20}
        cols={1.75}
        cellHeight="auto"
      >
        {LPostsDemo.map((post) => (
          <GridListTile key={post.id}>
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
      <Explore classes={classes} />
      <LatestPosts classes={classes} />
    </PublicLayout>
  );
}

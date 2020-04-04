import React from "react";
import Link from "../src/components/Link";
import PublicLayout from "../src/components/Layout/PublicLayout";

import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
  block: {
    /* responsive layout: < breakpoint md use down */
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    },
  },
  gitem: {
    padding: theme.spacing(3),
  },

  aiblock: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    },
    borderRadius: theme.spacing(3),
    /* Here the fade is using for the opacity, 0.15 */
    backgroundColor: fade(theme.palette.secondary.main, 0.15),
  },

  feaAssistBlock: {
    zIndex: 1,

  }
}));

function TopLayer(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.block} alignItems="flex-end">
      <Grid item xs={12} md={6}>
        <Typography variant="h3" color="textPrimary">Build your dream team now.</Typography>
        <br />
        <Typography variant="body1">
          We are here for you to find your partner to build the team you need
          for your startup.
        </Typography>
        <br />
        <Button href="/" component={Link} variant="contained">
          Start now
        </Button>
      </Grid>

      <Grid item xs={12} md={6}>
        <img className={classes.image} src="padding_1.png" />
      </Grid>
    </Grid>
  );
}


function AIBlock(props) {
  const { classes } = props

  return (
    <Grid container className={classes.aiblock} justify="center">
      <Grid item xs={12} md={5}>
        <img className={classes.image} src="padding_2.png" />
      </Grid>

      <Grid item xs={12} md={7} className={classes.gitem}>
        <Typography variant="h4" color="textPrimary">
          Let our AI help you finding your potential partner.
        </Typography>
        <br />
        <Typography variant="body1">
          The team is the key to make your fresh company strong and stable, use our platform to start finding your talents and buid your best team
        </Typography>
      </Grid>
    </Grid>
  )
}


const featureBlocks = [
  {
    key: "fea_team", 
    title: {en_us: "Find your teammates"}, 
    content: {en_us: "Our AI will ensure your founder team will be the perfect match with you by our accumulated team data and algorithm"}, 
    image: "",
    class: "feaTeamBlock"
  },
  {
    key: "fea_assist", 
    title: {en_us: "Immedaite Assistance"}, 
    content: {en_us: "Our customer service team will try to help you immedately with our online chatting function for any help or urgent issues you may have regarding our service"}, 
    image: "",
    class: "feaAssistBlock"
  },
  {
    key: "fea_legal", 
    title: {en_us: "Legal issues"}, 
    content: {en_us: "We will try to formalize the whole process to be as standard and legal as possible, this can be very important to your first step"}, 
    image: "",
    class: "feaLegalBlock"
  },
  {
    key: "fea_privacy", 
    title: {en_us: "Privacy"}, 
    content: {en_us: "We will keep your startup ideas and details safe with us, we will keep them as safe as what you need"}, 
    image: "",
    class: "feaPrivacyBlock"
  },
]

function Features(props) {
  const { classes } = props

  return (
    <Grid container className={classes.block} justify="center">
      <Grid item xs={12}>
        <Typography variant="h4" color="textPrimary">
          Features
        </Typography>
        <br />
        <Typography variant="body1">
          Some of the features and advantages that we provide for those of you who need to find your co-founder.
        </Typography>
      </Grid>
      {featureBlocks.map(e => (
        <Grid item xs={12} md={6}>
          
        </Grid>
      ))}
    </Grid>
  )
}


function Copyright() {
  return <div />;
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
      <AIBlock classes={classes}/>
      <Copyright />
    </PublicLayout>
  );
}

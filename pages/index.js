import React from "react";
import PublicLayout from "../src/components/Layout/PublicLayout";

import Link from "../src/components/Link";
import Trapezoid from "../src/components/Trapezoid";
import LatestCard from "../src/components/PeopleCard";

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
  image: {
    width: "100%",
  },
  block: {
    /* responsive layout: < breakpoint md use down */
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
  },
  gitem: {
    padding: theme.spacing(3),
  },

  aiblock: {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
    borderRadius: theme.spacing(3),
    /* Here the fade is using for the opacity, 0.15 */
    backgroundColor: fade(theme.palette.secondary.main, 0.15),
  },

  /* For feature block */
  feaTeam: {
    fill: fade(theme.palette.third.main, 0.15),
  },
  feaAssist: {
    fill: fade(theme.palette.primary.main, 0.15),
  },
  feaLegal: {
    fill: fade(theme.palette.secondary.main, 0.15),
  },
  feaPrivacy: {
    fill: fade(theme.palette.fourth.main, 0.15),
  },
  feaImageHolder: {
    position: "relative",
    left: "30%",
    width: "70%",
  },
  feaDescription: {
    position: "absolute",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    padding: theme.spacing(2), // please match feaItem margin below
  },
  feaItem: {
    padding: theme.spacing(2),
  },
  /* feature part ends */

  latestRoot: {
    borderRadius: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  profileCard: {
    height: "100%",
    width: "100%",
  },
  profileContent: {
    padding: theme.spacing(2),
  },
}));

function TopLayer(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.block} alignItems="flex-end">
      <Grid item xs={12} md={6}>
        <Typography variant="h3" color="textPrimary">
          Build your dream team now.
        </Typography>
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
  const { classes } = props;

  return (
    <Grid container className={classes.aiblock}>
      <Grid item xs={12} md={5}>
        <img className={classes.image} src="padding_2.png" />
      </Grid>

      <Grid item xs={12} md={7} className={classes.gitem}>
        <Typography variant="h4" color="textPrimary">
          Let our AI help you finding your potential partner.
        </Typography>
        <br />
        <Typography variant="body1">
          The team is the key to make your fresh company strong and stable, use
          our platform to start finding your talents and buid your best team
        </Typography>
      </Grid>
    </Grid>
  );
}

/* For factorizing feature in feature corner */
function Onefeature(props) {
  const { e, classes } = props;

  return (
    <Grid item xs={12} md={6} className={classes.feaItem}>
      <Grid container alignItems="center" className={classes.feaDescription}>
        <Grid item xs={5}>
          <img className={classes.image} src={e.image} />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h5" color="textPrimary" align="center">
            {e.title["en_us"]}
          </Typography>
          <br />
          <Typography variant="body2" align="justify">
            {e.content["en_us"]}
          </Typography>
        </Grid>
      </Grid>

      <div className={classes.feaImageHolder}>
        <Trapezoid classname={e.trape} />
      </div>
    </Grid>
  );
}

function Features(props) {
  const { classes } = props;

  const featureBlocks = [
    {
      key: "fea_team",
      title: { en_us: "Find your teammates" },
      content: {
        en_us:
          "Our AI will ensure your founder team will be the perfect match with you by our accumulated team data and algorithm",
      },
      image: "padding_fea_1.png",
      trape: classes.feaTeam,
    },
    {
      key: "fea_assist",
      title: { en_us: "Immediate Assistance" },
      content: {
        en_us:
          "Our customer service team will try to help you immedately with our online chatting function for any help or urgent issues you may have regarding our service",
      },
      image: "padding_fea_2.png",
      trape: classes.feaAssist,
    },
    {
      key: "fea_legal",
      title: { en_us: "Legal issues" },
      content: {
        en_us:
          "We will try to formalize the whole process to be as standard and legal as possible, this can be very important to your first step",
      },
      image: "padding_fea_3.png",
      trape: classes.feaLegal,
    },
    {
      key: "fea_privacy",
      title: { en_us: "Privacy" },
      content: {
        en_us:
          "We will keep your startup ideas and details safe with us, we will keep them as safe as what you need",
      },
      image: "padding_fea_4.png",
      trape: classes.feaPrivacy,
    },
  ];

  return (
    <Grid container className={classes.block}>
      <Grid item xs={12}>
        <Typography variant="h4" color="textPrimary" align="center">
          Features
        </Typography>
        <br />
        <Typography variant="body1" align="center">
          Some of the features and advantages that we provide for those of you
          who need to find your co-founder.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {featureBlocks.map((e) => (
            <Onefeature e={e} classes={classes} key={e.key} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

function LatestPosts(props) {
  const { classes } = props;

  const list = [
    {
      id: "id1",
      owner: {
        avatar: "avatar/avatar_1.jpeg",
        displayname: "John Fang",
        from: "wordfaang.com",
      },
      content: {
        message:
          "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla. If I have more words? Will the row be extended?",
      },
    },
    {
      id: "id2",
      owner: {
        avatar: "avatar/avatar_2.jpeg",
        displayname: "Jeny Doe",
        from: "UX Engineer",
      },
      content: {
        message:
          "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor",
      },
    },
    {
      id: "id3",
      owner: {
        avatar: "avatar/avatar_3.jpeg",
        displayname: "William",
        from: "Web Designer",
      },
      content: {
        message:
          "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor",
      },
    },
  ];

  return (
    <div className={classes.latestRoot}>
      <Typography variant="h4" color="textSecondary">
        Latest Post
      </Typography>
      <br />
      <GridList
        className={classes.gridList}
        spacing={20}
        cols={1.75}
        cellHeight="auto"
      >
        {list.map((post) => (
          <GridListTile key={post.id}>
            <LatestCard classes={classes} data={post} />
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
      <Features classes={classes} />
      <LatestPosts classes={classes} />
    </PublicLayout>
  );
}

import React from "react";
import { useRouter } from "next/router";

import { Grid, Tabs, Tab, Box, Typography } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import PrivateLayout from "../src/components/Layout/private/PrivateLayout";
import PeopleTagCard from "../src/components/PeopleTagCard";

import SelfDemo from "../src/components/demo/self";
import RecommendsDemo from "../src/components/demo/recommendation";
import clsx from "clsx";

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
  block: {
    padding: theme.spacing(2),
    minHeight: "50%",
    maxHeight: "50%"
  },
  profile: {
    width: "100%",
  },
  profileCard: {
    width: "35%",
  },
  profileDetails: {
    width: "65%",
  },
  recommend: {
    width: "65%",
  },
  connections: {
    width: "35%",
  },
  connections_list: {
    overflow: "scroll",
    padding: theme.spacing(2),
  },
  paper: {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: theme.spacing(2),
  },
  expand_h: {
    height: "100%",
  },
  expand_w: {
    width: "100%",
  },
  padding: {
    padding: theme.spacing(2),
  },
  v_align: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const StyledTabs = withStyles({
  root: {
    borderBottom: "1px solid #F5F5F5",
  },
  indicator: {
    backgroundColor: "#006EFF",
  },
})(Tabs);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 150,
    fontWeight: theme.typography.fontWeightLight,
    fontFamily: "Asap",
    fontStyle: "normal",
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: 500,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function ProfileBlock({ classes }) {
  const [tab, settab] = React.useState(0);

  function handleTabPageChange(event, newValue) {
    settab(newValue);
  }

  return (
    <Grid item xs={12} className={clsx(classes.block)}>
      <div className={clsx(classes.expand_h, classes.expand_w, classes.paper)}>
        <Typography variant="h5">User Profile</Typography>
        <Grid container className={clsx(classes.expand_w)}>
          <Grid item xs={4}>
            <PeopleTagCard isSelf={true} data={SelfDemo} />
          </Grid>
          <Grid item xs={8}>
            <StyledTabs value={tab} onChange={handleTabPageChange} centered>
              <StyledTab label="Basic" />
              <StyledTab label="Education" />
              <StyledTab label="Experience" />
              <StyledTab label="Interests" />
            </StyledTabs>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

function RecommendsBlock({ classes }) {
  return (
    <Grid item xs={8} className={clsx(classes.block)}>
      <div className={clsx(classes.expand_h, classes.expand_w, classes.paper)}>
        <Typography variant="h5">Potential Candidate</Typography>
        <br />
        <Grid container spacing={1} className={clsx(classes.expand_w)}>
          {RecommendsDemo.map((element, index) => (
            <Grid item xs={5} key={"Recommendppl" + index}>
              <PeopleTagCard isSelf={false} data={element} />
            </Grid>
          ))}
          <Grid item xs={2}>
            <Box
              className={clsx(classes.v_align, classes.expand_h)}
              variant={"h6"}
            >
              Learn more
            </Box>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

function ConnectionBlock({ classes }) {
  return (
    <Grid item xs={4} className={clsx(classes.block)}>
      <div className={clsx(classes.expand_h, classes.expand_w, classes.paper)}>
        <Typography variant="h5">Connections</Typography>
        <br />
        <div className={classes.connections_list}>
          
        </div>
      </div>
    </Grid>
  );
}

export default function ProfilePage() {
  const classes = useStyles();
  const router = useRouter();
  const { profile } = router.query;

  // replace true with authentication later
  if (true) {
    /* Please write your profile page inside layout */
    return (
      <PrivateLayout title={profile}>
        <Grid container className={clsx(classes.expand_h, classes.expand_w)}>
          <ProfileBlock classes={classes} />
          <RecommendsBlock classes={classes} />
          <ConnectionBlock classes={classes} />
        </Grid>
      </PrivateLayout>
    );
  } else {
    router.replace(userid, "404", { shallow: true });
  }
}

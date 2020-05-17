import React from "react";
import { useRouter } from "next/router";

import {Grid, Box, Typography} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import PrivateLayout from "../../src/components/Layout/private/PrivateLayout";
import PeopleTagCard from "../../src/components/prefabs/People/PeopleTagCard";
import { StyledTabs, StyledTab, InfoTabPanel } from "../../src/components/Tabs"

import SelfDemo from "../../src/components/demo/self";
import RecommendsDemo from "../../src/components/demo/recommendation";
import ConnectionDemo from "../../src/components/demo/connection_list";
import InfoDemo from "../../src/components/demo/infoDemo";
import clsx from "clsx";
import PeopleHeader from "../../src/components/prefabs/People/PeopleHeader";

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({
  block: {
    display: "block",
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minHeight: "50vh",
    maxHeight: "50vh",
    overflow: "hidden"
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
  overflow_list: {
    overflow: "scroll",
    height: "100%",
    paddingBottom: theme.spacing(4)
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



function ProfileBlock({ classes }) {
  const [value, setValue] = React.useState(0);

  function handleTabPageChange(event, newValue) {
    setValue(newValue);
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
              <StyledTabs value={value} onChange={handleTabPageChange} centered>
                <StyledTab label="Basic" />
                <StyledTab label="Education" />
                <StyledTab label="Experience" />
                <StyledTab label="Interests" />
              </StyledTabs>
              {InfoDemo.map((info, index) => (
                <InfoTabPanel value={value} index={index} data={info}/>
              ))}
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
        <Grid container spacing={1} className={clsx(classes.expand_w, classes.overflow_list)}>
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
        <div className={classes.overflow_list}>
            {ConnectionDemo.map((element, index) =>(
                <PeopleHeader
                    key={"connect"+index}
                    avatar={element.avatar}
                    displayname={element.displayname}
                    isSelf={true}
                />
            ))}
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

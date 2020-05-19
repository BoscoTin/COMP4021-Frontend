import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Grid, Box, Typography, CircularProgress } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import PrivateLayout from "../../src/components/Layout/private/PrivateLayout";
import PeopleTagCard from "../../src/components/prefabs/People/PeopleTagCard";
import { StyledTabs, StyledTab, InfoTabPanel } from "../../src/components/Tabs";

import InfoDemo from "../../src/components/demo/infoDemo"
import SelfDemo from "../../src/components/demo/self"
import RecommendsDemo from "../../src/components/demo/recommendation";
import ConnectionDemo from "../../src/components/demo/connection_list";
import clsx from "clsx";
import PeopleHeader from "../../src/components/prefabs/People/PeopleHeader";

import { useSelector, useDispatch } from "react-redux";
import { begin_find_user, find_user } from "../../src/redux/actions/User";

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
    [theme.breakpoints.up("md")]: {
      minHeight: "50vh",
      maxHeight: "50vh",
      overflow: "hidden",
    },
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
    paddingBottom: theme.spacing(4),
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
  tabpanel: {
    paddingTop: theme.spacing(2),
  },
}));

function ProfileBlock({ classes, email }) {
  const [value, setValue] = React.useState(0);
  // const selfuser = useSelector((state) => state.user.details);

  function handleTabPageChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Grid item xs={12} className={clsx(classes.block)}>
      <div className={clsx(classes.expand_h, classes.expand_w, classes.paper)}>
        <Typography variant="h5">User Profile</Typography>
        <Grid
          container
          className={clsx(classes.expand_w, classes.overflow_list)}
        >
          <Grid item md={4} xs={12}>
            <PeopleTagCard isSelf={true} email={email} data={SelfDemo} />
          </Grid>
          <Grid item md={8} xs={12}>
            <StyledTabs value={value} onChange={handleTabPageChange} centered>
              <StyledTab label="Basic" />
              <StyledTab label="Education" />
              <StyledTab label="Experience" />
              <StyledTab label="Interests" />
            </StyledTabs>
            <Grid
              container
              spacing={1}
              alignItems={"center"}
              className={clsx(classes.expand_w, classes.tabpanel)}
            >
              <InfoTabPanel value={value} data={InfoDemo} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

function RecommendsBlock({ classes }) {
  return (
    <Grid item md={8} xs={12} className={clsx(classes.block)}>
      <div className={clsx(classes.expand_h, classes.expand_w, classes.paper)}>
        <Typography variant="h5">Potential Candidate</Typography>
        <br />
        <Grid
          container
          spacing={1}
          className={clsx(classes.expand_w, classes.overflow_list)}
        >
          {RecommendsDemo.map((element, index) => (
            <Grid item md={5} xs={12} key={"Recommendppl" + index}>
              <PeopleTagCard isSelf={false} data={element} />
            </Grid>
          ))}
          <Grid item md={2} xs={12}>
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
    <Grid item md={4} xs={12} className={clsx(classes.block)}>
      <div className={clsx(classes.expand_h, classes.expand_w, classes.paper)}>
        <Typography variant="h5">Connections</Typography>
        <br />
        <div className={classes.overflow_list}>
          {ConnectionDemo.map((element, index) => (
            <PeopleHeader
              key={"connect" + index}
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
  // const dispatch = useDispatch();
  // const find_status = useSelector((state) => state.user.status);

  // useEffect(() => {
  //   dispatch(begin_find_user());
  //   dispatch(find_user(profile));
  // }, [router.asPath]);

  // // replace true with authentication later
  // if (find_status !== "loading") {
  //   if (find_status === "success") {
  //     /* Please write your profile page inside layout */
      return (
        <PrivateLayout title={profile}>
          <Grid container className={clsx(classes.expand_h, classes.expand_w)}>
            <ProfileBlock classes={classes} email={profile} />
            <RecommendsBlock classes={classes} />
            <ConnectionBlock classes={classes} />
          </Grid>
        </PrivateLayout>
      );
  //   } else {
  //     return (
  //       <Grid
  //         container
  //         alignItems="center"
  //         className={(classes.expand_w, classes.expand_h)}
  //       >
  //         <Grid item xs={12}>
  //           <Typography variant="h4">
  //             Please refresh or see if you have input the correct path.
  //           </Typography>
  //         </Grid>
  //       </Grid>
  //     );
  //   }
  // } else {
  //   return (
  //     <CircularProgress className={clsx(classes.expand_w, classes.expand_h)} />
  //   );
  // }
}

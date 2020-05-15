import React from "react";
import clsx from 'clsx';
import Head from "next/head";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "./Appbar"
import Drawer from "./Drawer"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    backgroundColor: "#FAFAFB",
    overflow: "hidden"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  space: {
    flexGrow: 1,
  },

  appbar: {
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appbaropen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function (props) {
  const { title, children } = props;
  const classes = useStyles();

  // set state here
  const [ drawerOpen, setDrawerOpen ] = React.useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
    console.log(true)
  }
  const handleDrawerClose = () => {
    setDrawerOpen(false)
    console.log(false)
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>{title}</title>
      </Head>

      <AppBar classes={classes} open={drawerOpen} handleDrawerOpen={handleDrawerOpen}/>
      <Drawer classes={classes} open={drawerOpen} handleDrawerClose={handleDrawerClose}/>

      <main className={clsx(classes.content, {
        [classes.contentShift]: drawerOpen
      })}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

import React from "react";
import clsx from 'clsx';
import Head from "next/head";



import AppBar from "./Appbar"
import Drawer from "./Drawer"

import useStyles from "../../../styles/PrivateAppBar"

export default function (props) {
  const { title, children } = props;
  const classes = useStyles();

  // set state here
  const [ drawerOpen, setDrawerOpen ] = React.useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }
  const handleDrawerClose = () => {
    setDrawerOpen(false)
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

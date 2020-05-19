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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <Head>
        <title>{title}</title>
      </Head>

      <AppBar classes={classes} handleDrawerToggle={handleDrawerToggle}/>
      <Drawer classes={classes} open={drawerOpen} handleDrawerToggle={handleDrawerToggle}/>

      <main>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

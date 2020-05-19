import React from "react";
import clsx from "clsx";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import {
  MenuRounded,
  Notifications,
  Search,
  Settings,
} from "@material-ui/icons";

export default function (props) {
  const { classes, handleDrawerToggle } = props;
  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <IconButton
          aria-label='control drawer open'
          edge="start" 
          onClick={handleDrawerToggle} 
          className={classes.menuButton} 
        >
          <MenuRounded />
        </IconButton>

        <Typography variant="h4" color="textPrimary" style={{paddingLeft: '0.5%'}}>
          Profile
        </Typography>

        <div className={classes.grow} />

        <IconButton>
          <Notifications />
        </IconButton>

        <IconButton>
          <Search />
        </IconButton>

        <IconButton>
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

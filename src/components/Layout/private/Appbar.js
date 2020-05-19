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
    <AppBar position="fixed" className={classes.appbar} >
      <Toolbar>
        <IconButton
            onClick={handleDrawerToggle}
            className={classes.menuButton}
        >
          <MenuRounded />
        </IconButton>

        <Typography variant="h5" color="textPrimary">
          Profile
        </Typography>

        <div className={classes.space} />

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

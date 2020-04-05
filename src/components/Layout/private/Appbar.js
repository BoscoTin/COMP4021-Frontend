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
  const { classes, open, handleDrawerOpen } = props;
  return (
    <AppBar
      className={clsx(classes.appbar, {
        [classes.appbaropen]: open,
      })}
    >
      <Toolbar>
        <IconButton
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
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

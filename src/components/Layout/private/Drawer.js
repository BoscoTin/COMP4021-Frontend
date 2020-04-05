import React from "react";

import { Drawer, IconButton } from '@material-ui/core'

import { Close } from '@material-ui/icons'

export default function (props) {
  const { classes, handleDrawerClose, open } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <Close />
        </IconButton>
      </div>
    </Drawer>
  );
}

import React from "react";

import {
  Drawer,
  IconButton,
  Divider,
  ListItemIcon,
  MenuItem,
  Box,
} from "@material-ui/core";
import {
  Close,
  Menu as MenuIcon,
  MailOutline,
  ChatBubbleOutline,
  PersonOutline,
  Settings,
  TrendingUp,
  ExitToApp,
} from "@material-ui/icons";

import PeopleHeader from "../../prefabs/People/PeopleHeader";
import Link from "../../Link";

import SelfDemo from "../../demo/self";

const MainItems = [
  {
    display: "Profile",
    href: "[profile]/profile",
    icon: MenuIcon,
  },
  {
    display: "Messages",
    href: "[profile]/messages",
    icon: MailOutline,
  },
  {
    display: "Posts",
    href: "[profile]/posts",
    icon: ChatBubbleOutline,
  },
  {
    display: "Group",
    href: "[profile]/group",
    icon: PersonOutline,
  },
];

const UserItems = [
  {
    display: "Settings",
    href: "[profile]/settings",
    icon: Settings,
  },
  {
    display: "Trends",
    href: "[profile]/trends",
    icon: TrendingUp,
  },
];

const DrawerLabel = ({ text }) => (
  <Box
    paddingLeft={"32px"}
    paddingTop={"15px"}
    paddingBottom={"15px"}
    variant="h6"
  >
    {text.toUpperCase()}
  </Box>
);

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
      <div className={classes.drawerContent}>
        <Divider className={classes.expand_w} />
        <PeopleHeader
          avatar={SelfDemo.avatar}
          displayname={SelfDemo.displayname}
          from={SelfDemo.from}
          isSelf={true}
          isBadge={true}
        />
        <Divider className={classes.expand_w} />

        <DrawerLabel text="Main" />
        {MainItems.map((item, index) => (
          <MenuItem
            component={Link}
            href={"/" + item.href}
            className={classes.draweritem}
          >
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <Box fontFamily={"Roboto"} fontWeight={500} variant="h5">
              {item.display}
            </Box>
          </MenuItem>
        ))}
        <br />
        <DrawerLabel text="User" />
        {UserItems.map((item, index) => (
          <MenuItem
            component={Link}
            href={"/" + item.href}
            className={classes.draweritem}
          >
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <Box fontFamily={"Roboto"} fontWeight={500} variant="h5">
              {item.display}
            </Box>
          </MenuItem>
        ))}

        <br />
        <MenuItem component={Link} href={"/"} className={classes.draweritem}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <Box fontFamily={"Roboto"} fontWeight={500} variant="h5">
            Logout
          </Box>
        </MenuItem>
      </div>
    </Drawer>
  );
}

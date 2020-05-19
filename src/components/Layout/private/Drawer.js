import React from "react";

import {
  Drawer,
  IconButton,
  Divider,
  ListItemIcon,
  MenuItem,
  Box,
  Hidden,
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

import { useTheme } from '@material-ui/core/styles';

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
  const { classes, handleDrawerToggle, open } = props;
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
        <PeopleHeader
          avatar={SelfDemo.avatar}
          displayname={SelfDemo.displayname}
          from={SelfDemo.from}
          isSelf={true}
          isBadge={true}
        />

        <DrawerLabel text="Main" />
        {MainItems.map((item, index) => (
          <MenuItem
            key={"MainMenu"+index}
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
            key={"UserMenu"+index}
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
  )

  return (
    <nav className={classes.drawer} aria-label="drawer">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer classes={{paper: classes.drawerPaper}} variant="permanent" open > 
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

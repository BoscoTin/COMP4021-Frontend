import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
<<<<<<< HEAD
      backgroundColor: 'transparent',
      boxShadow: 'none',
      top: 0,
      paddingBottom: theme.spacing(2),
=======
>>>>>>> c562d4da552eb6b31ad3856626807c4a7278a6dd
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      color: 'inherit',
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
<<<<<<< HEAD
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    draweritem: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3)
    },
    grow: {
      flexGrow: 1,
    },
  }));
=======
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}));
>>>>>>> c562d4da552eb6b31ad3856626807c4a7278a6dd

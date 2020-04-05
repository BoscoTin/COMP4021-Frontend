import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

import { Divider } from "@material-ui/core"

import AppBar from "./Appbar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },

  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

  appbar: {
    position: "absolute",
    background: "transparent",
    boxShadow: "none",
  },
  space: {
    flexGrow: 1,
  },
  
  footer: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "horizontal",
  },
  footInfo: {
    width: "40%",
  },
  footOther: {
    width: "20%",
    alignContent: "center",
  },
}));

export default function (props) {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Head>
        <title>{title}</title>
      </Head>
      <AppBar classes={classes} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>

      <Divider className={classes.divider}/>
      <Footer classes={classes}/>
    </section>
  );
}

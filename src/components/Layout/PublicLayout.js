import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

import AppBar from "./Appbar";

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

  appbar: {
    position: "absolute",
    background: "transparent",
    boxShadow: "none",
  },
  space: {
    flexGrow: 1,
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
    </section>
  );
}

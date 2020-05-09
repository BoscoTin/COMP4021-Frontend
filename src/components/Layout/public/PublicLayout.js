import Head from "next/head";

import { Divider } from "@material-ui/core"

import AppBar from "./Appbar";
import Footer from "./Footer";

import useStyles from "../../../styles/PublicAppBar";

export default function (props) {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    </div>
  );
}

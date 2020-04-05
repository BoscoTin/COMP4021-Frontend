import React from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import PrivateLayout from "../src/components/Layout/private/PrivateLayout"

/* 
  please define css style here, using camel style name 
  use vscode with extension intellisense would greatly help
*/
const useStyles = makeStyles((theme) => ({}));

export default function ProfilePage() {
  const classes = useStyles();
  const router = useRouter();
  const { profile } = router.query;

  // replace true with authentication later
  if (true) {
    /* Please write your profile page inside layout */
    return <PrivateLayout title={profile}>ABC</PrivateLayout>;
  } else {
    router.replace(userid, "404", { shallow: true });
  }
}

import React from "react";

import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

import CustomHeader from "./PeopleHeader"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileCard: {
    height: "100%",
    width: "100%",
  },
  profileContent: {
    padding: theme.spacing(2),
  },
}));

export default function (props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Card className={classes.profileCard}>
      <CustomHeader
        avatar={data.owner.avatar}
        displayname={data.owner.displayname}
        from={data.owner.from}
        isSelf={true}
        isBadge={false}
      />
      <CardContent className={classes.profileContent}>
        <Typography variant="body2" align="justify">{data.content.message}</Typography>
      </CardContent>
    </Card>
  );
}

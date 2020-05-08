import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";

import { AccountCircleSharp } from "@material-ui/icons";

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
      <CardHeader
        avatar={<Avatar src={data.owner.avatar}><AccountCircleSharp /></Avatar>}
        title={data.owner.displayname}
        titleTypographyProps={{ variant: "h6" }}
        subheader={data.owner.from}
        subheaderTypographyProps={{ variant: "body2", color: "primary" }}
      />
      <CardContent className={classes.profileContent}>
        <Typography variant="body2" align="justify">{data.content.message}</Typography>
      </CardContent>
    </Card>
  );
}

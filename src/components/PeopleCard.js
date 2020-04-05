import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";

import { AccountCircleSharp } from "@material-ui/icons";

export default function (props) {
  const { classes, data } = props;

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

import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  spacearound: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  media: {
    height: "125px",
    width: "100%",
  },
  small_pad: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  content: {
    height: "250px",
    overflow: "hidden"
  }
}));
function RemainingDates({ text }) {
  return (
      <Box style={{ maxWidth: "50%" }} fontFamily= "Roboto" align={"center"} color={"#6984E2"}>
        <img src={"clock.svg"} />
        {text}
      </Box>
  );
}
function Location({ text }){
  return (
      <Box variant="body2" style={{ maxWidth: "50%" }}>
        <img src={"map.svg"} />
        {text}
      </Box>
  );
}

function ChipText({ text }) {
  return (
    <Box variant="body2" style={{ maxWidth: "50%" }}>
      {text}
    </Box>
  );
}

export default function (props) {
  const { data } = props;
  const classes = useStyles();
  const d3 = (new Date(data.date_of_expire) - new Date(data.date_of_posting))/864000000;
  const remainingDates = " " + d3.toString()+ " Days left";

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.title}
      />
      <CardContent className={classes.content}>
        <div className={classes.spacearound}>
          <ChipText text={data.category} />
          <ChipText text={data.date_of_posting} />
        </div>
        <Typography variant="h6">
          <strong>{data.title}</strong>
        </Typography>
        <div className={classes.small_pad}>
        <Typography variant="body2">
            {data.description}
        </Typography>
        </div>

        <div className={classes.spacearound}>
          <RemainingDates text={remainingDates}/>
          <Location text={data.location} />
        </div>
      </CardContent>
    </Card>
  );
}

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
    width: "85%",
    borderRadius:"20px",
    boxShadow: "0px 2px 4px rgba(96, 97, 112, 0.16), 0px 0px 1px rgba(40, 41, 61, 0.04)"
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
  },
  flex_box:{
    display: "flex",
    width: "100%",
  }
}));
function RemainingDates({ text }) {
  return (
      <Box style={{ maxWidth: "50%",marginTop:"1.5%",marginLeft:"3%",marginRight:"20%" }}
           fontFamily="Roboto"  color={"#6984E2"} fontSize={"12px"}>
        {text}
      </Box>
  );
}
function Location({ text }){
  return (
      <Box style={{ maxWidth: "50%", marginLeft:"2%", marginTop:"1%"}}
           fontFamily="Roboto" color={"#5D6F88"} fontSize={"9px"} >
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

        <div className={classes.flex_box}>
          <img src={"clock.svg"}/>
          <RemainingDates text={remainingDates} />
          <img src={"map.svg"} sizes={"150%"}/>
          <Location text={data.location} />
        </div>
      </CardContent>
    </Card>
  );
}

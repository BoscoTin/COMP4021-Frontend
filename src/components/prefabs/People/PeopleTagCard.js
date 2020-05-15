import React from "react";
import clsx from "clsx";

import {
  Card,
  Chip,
  Divider,
  CardContent,
  InputBase,
} from "@material-ui/core";

import CustomHeader from "./PeopleHeader"
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  expand_h: {
    height: "100%",
  },
  expand_w: {
    width: "100%",
  },
  card_base: {
    borderRadius: "12px",
  },
  card_self: {
    boxShadow: "none",
    backgroundColor: "inherit",
  },
  card_other: {
    boxShadow: `0px 2px 4px ${fade("#606770", 0.16)}`,
  },
  chip_base: {
    boxShadow: `0px 2px 4px ${fade("#606770", 0.16)}`,
    borderRadius: "3px",
    margin: theme.spacing(1),
  },
  textfield: {
    border: "1px solid #EAEAEA",
    boxSizing: "border-box",
    borderRadius: "3px",
  },
  textfield_word: {
    paddingLeft: "16px"
  },
  bg_white: {
    backgroundColor: "#FFFFFF",
  },
  bg_main: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function CustomChip({ classes, isSelf, text }) {
  return (
    <Chip
      className={clsx({
        [classes.bg_main]: isSelf,
        [classes.bg_white]: !isSelf,
      })}
      classes={{
        root: classes.chip_base,
      }}
      label={text}
      onDelete={() => {}}
    />
  );
}

export default function (props) {
  const { isSelf, data } = props;
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.card_base, {
        [classes.card_self]: isSelf,
        [classes.bg_main]: !isSelf,
        [classes.card_other]: !isSelf,
      })}
    >
      <CustomHeader 
        avatar={data.avatar}
        displayname={data.displayname}
        from={data.from}
        isSelf={isSelf}
        isBadge={false}
      />
      {isSelf && <br />}
      {!isSelf && <Divider className={classes.expand_w} />}
      <CardContent>
        {data.tags.map((tag) => (
          <CustomChip
            key={data.displayname + tag}
            classes={classes}
            text={tag}
            isSelf={isSelf}
          />
        ))}

        {isSelf && (
          <InputBase
            fullWidth
            placeholder="Add a skill"
            classes={{
              root: classes.textfield,
              input: classes.textfield_word
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}

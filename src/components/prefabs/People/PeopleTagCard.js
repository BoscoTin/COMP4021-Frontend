import React from "react";
import clsx from "clsx";

import { Card, Chip, Divider, CardContent, TextField } from "@material-ui/core";

import CustomHeader from "./PeopleHeader";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

import { useDispatch } from "react-redux";
import { add_self_tag, del_self_tag } from "../../../redux/actions/SelfTagDemo"

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
    paddingLeft: "16px",
  },
  bg_white: {
    backgroundColor: "#FFFFFF",
  },
  bg_main: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function CustomChip({ classes, isSelf, text, index }) {
  const dispatch = useDispatch();

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
      onDelete={() => { dispatch( del_self_tag(index) ) }}
    />
  );
}

export default function (props) {
  const { isSelf, data } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [text, setText] = React.useState();

  const handleEnterKey = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault()
      if (data.tags.length < 5){
        dispatch( add_self_tag(text) )
      }
      setText("")
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

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
        {data.tags.map((tag, index) => (
          <CustomChip
            key={data.displayname + tag}
            classes={classes}
            text={tag}
            isSelf={isSelf}
            index={index}
          />
        ))}

        {isSelf && (
          <TextField
            value={text}
            fullWidth
            placeholder="Add a skill"
            className={classes.textfield}
            InputProps={{
              className: classes.textfield_word,
            }}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
          />
        )}
      </CardContent>
    </Card>
  );
}

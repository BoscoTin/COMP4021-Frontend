import React from "react";
import clsx from "clsx";

import { Card, Chip, Divider, CardContent, TextField } from "@material-ui/core";

import CustomHeader from "./PeopleHeader";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

import { useDispatch, useSelector } from "react-redux";
import { begin_update, update_tag } from "../../../redux/actions/User"

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

function CustomChip({ classes, isSelf, text, index, handleDelete }) {
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
      onDelete={() => handleDelete(index)}
    />
  );
}

export default function (props) {
  const { isSelf, data, email } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const edit_status = useSelector(state => state.user.edit_status)
  const [text, setText] = React.useState();
  
  const handleEnterKey = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault()
      if (data.tags.length < 5){
        var newtags = data.tags
        newtags.push(text)
        dispatch( begin_update() )
        dispatch( update_tag(email, newtags) )
      }
      setText("")
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (index) => {
    var newtags = data.tags
    newtags.splice(index, 1)
    dispatch( begin_update() )
    dispatch( update_tag(email, newtags) )
  }

  if (data !== null){
    const displayname = data.first_name + data.last_name
    const from = data.company_organization

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
          displayname={displayname}
          from={from}
          isSelf={isSelf}
          isBadge={false}
        />
        {!isSelf && <Divider className={classes.expand_w} />}
        <CardContent>
          {data.tags.map((tag, index) => (
            <CustomChip
              key={data.id + tag}
              classes={classes}
              text={tag}
              isSelf={isSelf}
              index={index}
              handleDelete={handleDelete}
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
  } else {
    return <div />
  }
}

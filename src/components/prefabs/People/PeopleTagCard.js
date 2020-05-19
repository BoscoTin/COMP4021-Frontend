import React, { useEffect } from "react";
import clsx from "clsx";

import {
  Card,
  Chip,
  Divider,
  CardContent,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";

import CustomHeader from "./PeopleHeader";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

import hostname from "../../../API/hostname";

import { useDispatch, useSelector } from "react-redux";
import { begin_update, update_tag } from "../../../redux/actions/User";

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

function OldCardGeneralized({ isSelf, displayname, from, tags, email }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [text, setText] = React.useState();

  const handleEnterKey = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      if (tags === null){
        var newtags = [];
        newtags.push(text);
        dispatch(begin_update());
        dispatch(update_tag(email, newtags));
      } else if (tags.length < 5) {
        var newtags = tags;
        newtags.push(text);
        dispatch(begin_update());
        dispatch(update_tag(email, newtags));
      }
      setText("");
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (index) => {
    var newtags = tags;
    newtags.splice(index, 1);
    dispatch(begin_update());
    dispatch(update_tag(email, newtags));
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
        avatar={""}
        displayname={displayname}
        from={from}
        isSelf={isSelf}
        isBadge={false}
      />
      {!isSelf && <Divider className={classes.expand_w} />}
      <CardContent>
        {tags !== null && tags.map((tag, index) => (
          <CustomChip
            key={displayname + tag}
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
}

export default function (props) {
  const { isSelf, data, email, user_id } = props;

  const [loadstate, setload] = React.useState(true);
  const [userDetails, setDetails] = React.useState({});

  if (isSelf) {
    if (data !== null) {
      const displayname = data.first_name + " " + data.last_name;
      const from = data.company_organization;

      return (
        <OldCardGeneralized
          isSelf={isSelf}
          displayname={displayname}
          from={from}
          tags={data.tags}
          email={email}
        />
      );
    } else {
      return <CircularProgress />;
    }
  } else {
    return (
      <OldCardGeneralized
        isSelf={isSelf}
        displayname={data.displayname}
        from={data.from}
        tags={data.tags}
        email={email}
      />
    );
  }
}

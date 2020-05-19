import React, { useEffect } from "react";
import Router from "next/router";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { begin_signup, load_signup } from "../src/redux/actions/User";

import form_Details from "../src/components/demo/register_form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#F4F2F2",
  },
  expand_w: {
    width: "100%",
  },
  padding: {
    padding: theme.spacing(3),
    marginLeft: "5%",
  },
  title_margin_top: {
    marginTop: "5%",
  },
  text_field_margin: {
    marginBottom: "5%",
  },

  TitleLayer: {
    width: "100%",
    background: "#6984E2",
  },
  ContentMargin: {
    marginTop: "9%",
    marginLeft: "12%",
    marginBottom: "10%",
  },
  TextWidth: {
    width: "44%",
  },

  InputTextLayer: {
    marginTop: "-10%",
    marginBottom: "15%",
    width: "76%",
    background: "#FFFFFF",
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)",
  },
}));

function StyledTitleBox(props) {
  return (
    <Grid item xs={12}>
      <Box
        fontFamily="Roboto"
        fontStyle="normal"
        fontWeight="normal"
        fontSize="64px"
        lineHeight="75px"
        color="#6984E2"
        {...props}
      />
    </Grid>
  );
}

function StyledTextFieldLabelBox(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Box
        className={classes.text_field_margin}
        fontFamily="Roboto"
        fontStyle="normal"
        fontWeight="normal"
        fontSize="24px"
        lineHeight="28px"
        color="#000000"
        {...props}
      />
    </Grid>
  );
}

function StyledBox(props) {
  return (
    <Box
      fontFamily="Roboto"
      fontStyle="normal"
      fontWeight="normal"
      fontSize="45px"
      lineHeight="56px"
      color={"#FFFFFF"}
      {...props}
    />
  );
}

function Heading(props) {
  const { classes } = props;
  return (
    <Box
      className={classes.TitleLayer}
      display={"flex"}
      flexDirection={"space-between"}
    >
      <Box className={clsx(classes.ContentMargin, classes.TextWidth)}>
        <StyledBox display={"inline"}>Please provide a</StyledBox>
        <Box
          display={"inline"}
          fontFamily="Roboto"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="150px"
          lineHeight="56px"
          color={"#FFFFFF"}
        >
          Bit
        </Box>
        <StyledBox>more info to help us build your</StyledBox>
        <Box
          display={"inline"}
          fontFamily="Roboto"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="100px"
          lineHeight="120px"
          color={"#FFFFFF"}
        >
          profile
        </Box>
      </Box>
      <img src={"register_1.svg"} height={"90%"} width={"30%"} />
    </Box>
  );
}

function Form(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const message = useSelector((state) => state.user.message);
  const email = useSelector((state) => state.user.email);

  const [states, setStates] = React.useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    website: "",
    address: "",
    gender: "",
    date_of_birth: "",
    password: "",
    showPassword: false,
    country_distinct: "",
    school: "",
    study_field: "",
    company_organization: "",
    position: "",
    description: "",
    interests: [],
    abilities: "",
  });
  const handleChange = (prop) => (event) => {
    setStates({ ...states, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setStates({ ...states, showPassword: !states.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    console.log(states);
    dispatch(begin_signup());
    dispatch(load_signup({ ...states }));
  };

  useEffect(() => {
    if (status === "success") {
      Router.push(`/${email}/profile`);
    }
  });

  return (
    <Grid container className={classes.InputTextLayer}>
      {form_Details.map((Inputs) => (
        <Grid
          item
          key={Inputs.id}
          xs={Inputs.columns}
          className={classes.padding}
        >
          {Inputs.type === "title" && (
            <StyledTitleBox className={classes.title_margin_top}>
              {Inputs.title}
            </StyledTitleBox>
          )}

          {Inputs.type === "text" && (
            <Box>
              <StyledTextFieldLabelBox>{Inputs.label}</StyledTextFieldLabelBox>
              <TextField
                fullWidth
                placeholder={Inputs.placeholder}
                onChange={handleChange(Inputs.id)}
                value={states[Inputs.id]}
              />
            </Box>
          )}

          {Inputs.type === "select" && (
            <Box>
              <StyledTextFieldLabelBox>{Inputs.label}</StyledTextFieldLabelBox>
              <TextField
                select
                fullWidth
                placeholder={Inputs.label}
                onChange={handleChange(Inputs.id)}
                value={states[Inputs.id]}
              >
                {Inputs.select.map((val, index) => (
                  <MenuItem
                    key={Inputs.id + val + index}
                    value={val}
                    children={val}
                  />
                ))}
              </TextField>
            </Box>
          )}

          {Inputs.type === "multiselect" && (
            <Box>
              <StyledTextFieldLabelBox>{Inputs.label}</StyledTextFieldLabelBox>
              <TextField
                select
                fullWidth
                placeholder={Inputs.label}
                SelectProps={{
                  multiple: Inputs.type === "multiselect",
                  value: states[Inputs.id],
                  onChange: handleChange(Inputs.id)
                }}
              >
                {Inputs.select.map((val, index) => (
                  <MenuItem
                    key={Inputs.id + val + index}
                    value={val}
                    children={val}
                  />
                ))}
              </TextField>
            </Box>
          )}

          {Inputs.type === "password" && (
            <Box>
              <StyledTextFieldLabelBox>{Inputs.label}</StyledTextFieldLabelBox>
              <TextField
                fullWidth
                placeholder={Inputs.label}
                type={states.showPassword ? "text" : "password"}
                value={states[Inputs.id]}
                onChange={handleChange(Inputs.id)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {states.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}
        </Grid>
      ))}

      {/* Submit button */}
      <Grid item xs={12} className={classes.padding}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default function signupPage() {
  const classes = useStyles();
  return (
    <Grid>
      <Grid container className={classes.root} justify="center">
        <Heading classes={classes} />
        <Form classes={classes} />
      </Grid>
    </Grid>
  );
}

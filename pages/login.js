import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import Link from "../src/components/Link";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";

import Router from "next/router"
import { useSelector, useDispatch } from "react-redux"
import { begin_login, load_login } from "../src/redux/actions/User"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  LoginLayout: {
    marginTop: "7%",
    marginBottom: "7%",
    height: "725px",
    width: "400px",
    background: theme.palette.text.secondary,
    borderRadius: "1px",
  },

  LoginLayoutTitle: {
    padding: "15%",
    textAlign: "center",
  },

  LoginLayoutBox: {
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "5%",
    borderRadius: "1px",
  },
  LoginLayoutBoxText: {
    marginLeft: "5%",
  },

  LoginLayoutCheckBox: {
    marginLeft: "10%",
    marginRight: "50%",
    marginBottom: "5%",
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },

  LoginLayoutButton: {
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "15%",
    height: "8%",
    background: "#006EFF",
  },

  LoginLayoutSignUpBox: {
    marginBottom: "5%",
    textAlign: "center",
  },

  LoginLayoutForgotPassword: {
    marginTop: "5%",
    textAlign: "center",
  },
}));

function ForgotPasswordAndSignUpTextBox(props) {
  return (
    <Box
      fontFamily="Roboto"
      fontStyle={"normal"}
      fontWeight={"normal"}
      fontSize="16px"
      lineHeight="28px"
      color={"#3F3B3B"}
      {...props}
    />
  );
}

function ForgotPassword(props) {
  const { classes } = props;
  return (
    <Box className={classes.LoginLayoutForgotPassword}>
      <Button href="/signup" component={Link}>
        <ForgotPasswordAndSignUpTextBox>
          Forgot Password?
        </ForgotPasswordAndSignUpTextBox>
      </Button>
    </Box>
  );
}

function SignUp(props) {
  const { classes } = props;
  return (
    <Box className={classes.LoginLayoutSignUpBox}>
      <Button href="/signup" component={Link}>
        <ForgotPasswordAndSignUpTextBox>
          Don't have a account yet?
        </ForgotPasswordAndSignUpTextBox>
      </Button>
    </Box>
  );
}

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

function RememberMeCheckBox(props) {
  const { classes } = props;

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControl className={classes.LoginLayoutCheckBox}>
      <FormControlLabel
        control={<StyledCheckbox checked={checked} onChange={handleChange} />}
        label={"Remember me"}
      />
    </FormControl>
  );
}

function LoginLayout(props) {
  const { classes } = props;

  /* Redux - connect with API */
  const status = useSelector(state => state.user.status)
  const message = useSelector(state => state.user.message)
  const dispatch = useDispatch()

  const [values, setValues] = React.useState({
    id: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    dispatch( begin_login() )
    dispatch( load_login(values.id, values.password) )
  }

  function StyleBox(props) {
    const classes = useStyles();
    return (
      <Box
        className={classes.LoginLayoutBoxText}
        fontFamily="Roboto"
        fontStyle={"normal"}
        fontWeight={"normal"}
        fontSize="14px"
        lineHeight="24px"
        color={"#959393"}
        {...props}
      />
    );
  }

  useEffect(() => {
    if (status === "success") {
      Router.push(`/${states.id}/profile`)
    }
  })

  return (
    <Box
      className={classes.LoginLayout}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        className={classes.LoginLayoutTitle}
        fontFamily="Roboto"
        fontStyle={"normal"}
        fontWeight={"500"}
        fontSize="60px"
        lineHeight="70px"
      >
        Sign in
      </Box>

      <OutlinedInput
        id={"userName"}
        className={classes.LoginLayoutBox}
        value={values.id}
        onChange={handleChange("id")}
        startAdornment={
          <InputAdornment position={"start"}>
            <MailOutlineIcon />
            <StyleBox>email</StyleBox>
          </InputAdornment>
        }
      />

      <OutlinedInput
        id="standard-adornment-password"
        className={classes.LoginLayoutBox}
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        startAdornment={
          <InputAdornment position={"start"}>
            <FingerprintIcon />
            <StyleBox>password</StyleBox>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />

      <RememberMeCheckBox classes={classes} />
      <Button
        className={classes.LoginLayoutButton}
        variant="contained"
        onClick={handleLogin}
      >
        <Box
          fontFamily={"asap"}
          fontStyle={"italic"}
          fontWeight={"bold"}
          fontSize={"18px"}
          color={"#FFFFFF"}
        >
          Sign In
        </Box>
      </Button>

      <ForgotPassword classes={classes} />
      <SignUp classes={classes} />
    </Box>
  );
}

function Background(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <LoginLayout classes={classes} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function loginPage() {
  const classes = useStyles();
  return <Background classes={classes} />;
}

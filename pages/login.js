import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box, Typography, Button} from "@material-ui/core";
import Link from "../src/components/Link";
import {CheckBox, Visibility, VisibilityOff} from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const useStyles = makeStyles((theme) => ({
    Root: {
        flexGrow: 1,
    },
    LoginLayout: {
        marginTop:"7%",
        marginBottom:"7%",
        height:"725px",
        width:"400px",
        background: theme.palette.text.secondary,
        borderRadius:"1px"
    },

    LoginLayoutTitle:{
        padding:"15%",
        textAlign:"center"
    },

    LoginLayoutBox:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"5%",
        borderRadius:"1px"
    },LoginLayoutCheckBox:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"5%",
        background: theme.palette.text.secondary
    },LoginLayoutBoxText:{
        marginLeft:"5%"
    },

    LoginLayoutButton:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"15%",
        height:"8%",
        background: "#006EFF"
    },

    LoginLayoutSignUpBox:{
        marginBottom:"5%",
        textAlign:"center"
    },

    LoginLayoutForgotPassword:{
        marginTop:"5%",
        textAlign:"center"
    }
}));

function ForgotPasswordAndSignUpTextBox(props){
    return(
        <Box
            fontFamily= "Roboto"
            fontStyle={"normal"}
            fontWeight={"normal"}
            fontSize= "16px"
            lineHeight= "28px"
            color={"#3F3B3B"}
            {...props}/>
    );
}

function ForgotPassword(props){
    const {classes} = props;
    return(
        <Box className={classes.LoginLayoutForgotPassword} >
            <Button href="/signup"
                    component={Link} >
                <ForgotPasswordAndSignUpTextBox >Forgot Password?</ForgotPasswordAndSignUpTextBox>
            </Button>
        </Box>
    );
}

function SignUp(props){
    const {classes} = props;
    return(
        <Box className={classes.LoginLayoutSignUpBox}>
            <Button href="/signup"
                    component={Link}>
                <ForgotPasswordAndSignUpTextBox >Don't have a account yet?</ForgotPasswordAndSignUpTextBox>
            </Button>
        </Box>
    );
}


function LoginLayout(props){
    const {classes} = props;

    const [values, setValues] = React.useState({
        id: '',
        password: '',
        checked: false,
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    const handleCheckBoxChange = () =>{
        setValues({ ...values, checked: !values.checked });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function StyleBox(props){
        const classes = useStyles();
        return(
            <Box
                className={classes.LoginLayoutBoxText}
                fontFamily= "Roboto"
                fontStyle={"normal"}
                fontWeight={"normal"}
                fontSize= "14px"
                lineHeight= "24px"
                color={"#959393"}
                {...props}/>
        );
    }

    return (
        <Box className={classes.LoginLayout} display={"flex"} flexDirection={"column"}>
            <Box className={classes.LoginLayoutTitle}
                 fontFamily= "Roboto"
                 fontStyle={"normal"}
                 fontWeight={"500"}
                 fontSize= "60px"
                 lineHeight= "70px">
                Sign in
            </Box>

            <OutlinedInput id={"userName"}
                           className={classes.LoginLayoutBox}
                           value={values.id}
                           onChange={handleChange('id')}
                           startAdornment={
                               <InputAdornment position={"start"}>
                                   <MailOutlineIcon/>
                                   <StyleBox>email</StyleBox>
                               </InputAdornment>
                           }
            />

            <OutlinedInput id="standard-adornment-password"
                           className={classes.LoginLayoutBox}
                           type={values.showPassword ? 'text' : 'password'}
                           value={values.password}
                           onChange={handleChange('password')}
                           startAdornment={
                               <InputAdornment position={"start"}>
                                   <FingerprintIcon/>
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

            <FormControl>
                <FormControlLabel className={classes.LoginLayoutCheckBox}
                                  control={<CheckBox />}
                                  label={"Remember me"}
                                  checked={values.checked}
                                  onChange={handleCheckBoxChange}
                />
            </FormControl>

            <Button className={classes.LoginLayoutButton}
                href="/signup"
                component={Link}
                variant="contained">
                <Typography variant="button">LOGIN</Typography>
            </Button>


            <ForgotPassword classes={classes}/>
            <SignUp classes={classes}/>
        </Box>
    );
}

function Background(props){
    const {classes} = props;
    return(
        <Grid container className={classes.Root}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item>
                        <LoginLayout classes={classes}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default function loginPage() {
    const classes = useStyles();
    return <Background classes={classes}/>;
}
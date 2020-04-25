import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box, Typography, Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Link from "../src/components/Link";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
    Root: {
        flexGrow: 1,
        background:"linear-gradient(#F063B8 30%, #2D9CDB 90%)",
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
        background:"#EEEEEE"
    },

    LoginLayoutButton:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"15%",
        height:"8%",
        background: theme.palette.secondary.main
    },

    LoginLayoutOption:{
        marginTop:"10%",
        marginBottom:"5%",
        textAlign:"center",
    }, LoginLayoutOptionBox:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"15%",
    },LoginLayoutOption1:{
        width:"45%",
        background: theme.palette.text.secondary
    },LoginLayoutOption2:{
        width:"45%",
        background: theme.palette.text.secondary,
        marginLeft:"10%"
    },

    LoginLayoutSignUpBox:{
        marginBottom:"5%",
    }, LoginLayoutSignUpText:{
        marginTop:"1.2%",
        marginLeft:"22%",
        TextAlign:"center"
    },

    LoginLayoutForgotPassword:{
        marginTop:"5%",
        textAlign:"center",
    }
}));



function OtherLoginOption(props){
    const {classes} = props;
    return(
        <Box className={classes.LoginLayoutOptionBox} display={"flex"} flexDirection={"row"}>
            <Button className={classes.LoginLayoutOption1}
                    href="/signup"
                    component={Link}
                    variant="contained">
                <Typography variant="button">Option 1</Typography>
            </Button>

            <Button className={classes.LoginLayoutOption2}
                    href="/signup"
                    component={Link}
                    variant="contained">
                <Typography variant="button">Option 2</Typography>
            </Button>
        </Box>
    );
}

function ForgotPassword(props){
    const {classes} = props;
    return(
        <Box className={classes.LoginLayoutForgotPassword} display={"flex"} flexDirection={"row"}>
            <Typography className={classes.LoginLayoutSignUpText}>
                Forgot Password?
            </Typography>
            <Button href="/signup"
                    component={Link}>
                <Typography >Click here</Typography>
            </Button>
        </Box>
    );
}

function SignUp(props){
    const {classes} = props;
    return(
        <Box className={classes.LoginLayoutSignUpBox} display={"flex"} flexDirection={"row"}>
            <Typography className={classes.LoginLayoutSignUpText}>
                Not a member?
            </Typography>
            <Button href="/signup"
                    component={Link}>
                <Typography >Sign up now</Typography>
            </Button>
        </Box>
    );
}


function LoginLayout(props){
    const {classes} = props;

    const [values, setValues] = React.useState({
        id: '',
        password: '',
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


    return (
        <Box className={classes.LoginLayout} display={"flex"} flexDirection={"column"}>
            <Typography className={classes.LoginLayoutTitle} variant={"h3"}>
                Login
            </Typography>

            <OutlinedInput id={"userName"}
                           className={classes.LoginLayoutBox}
                           value={values.id}
                           onChange={handleChange('id')}/>

            <OutlinedInput id="standard-adornment-password"
                           className={classes.LoginLayoutBox}
                           type={values.showPassword ? 'text' : 'password'}
                           value={values.password}
                           onChange={handleChange('password')}
                           endAdornment={
                               <InputAdornment position="end">
                                   <IconButton
                                       onClick={handleClickShowPassword}
                                       onMouseDown={handleMouseDownPassword}
                                   >
                                       {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                   </IconButton>
                               </InputAdornment>
                           }/>

            <Button className={classes.LoginLayoutButton}
                href="/signup"
                component={Link}
                variant="contained">
                <Typography variant="button">LOGIN</Typography>
            </Button>

            <Typography className={classes.LoginLayoutOption}>
                or login with
            </Typography>

            <OtherLoginOption classes={classes}/>
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
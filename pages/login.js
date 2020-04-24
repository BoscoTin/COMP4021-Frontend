import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box, Typography, Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {CheckBox} from "@material-ui/icons";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Link from "../src/components/Link";

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
    },LoginLayoutTitle:{
        padding:"15%",
        textAlign:"center"
    },
    LoginLayoutBox:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"5%",
        background:"#EEEEEE"
    },
    LoginLayoutCheckBox:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"5%",
        height:"20%",
    },
    LoginLayoutButton:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"15%",
        height:"8%",
        background: theme.palette.secondary.main
    },
    LoginLayoutOption:{
        marginBottom:"5%",
        textAlign:"center",
    },LoginLayoutOptionBox:{
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"25%",
    },LoginLayoutOption1:{
        width:"45%",
        background: theme.palette.text.secondary
    },LoginLayoutOption2:{
        width:"45%",
        background: theme.palette.text.secondary,
        marginLeft:"10%"
    },
    LoginLayoutSignUpText:{
        marginTop:"1.5%",
        marginLeft:"22%",
        TextAlign:"center"
    }
}));


function LoginLayout(props){
    const {classes} = props;
    return (
        <Box className={classes.LoginLayout} display={"flex"} flexDirection={"column"}>
            <Typography className={classes.LoginLayoutTitle} variant={"h3"}>
                Login
            </Typography>

            <TextField id={"accountName"} className={classes.LoginLayoutBox} variant={"outlined"}/>
            <TextField id={"accountName"} className={classes.LoginLayoutBox} variant={"outlined"}/>

            <FormControl>
                <FormControlLabel className={classes.LoginLayoutCheckBox}
                    control={<CheckBox />}
                    label={"Remember me"}
                />
            </FormControl>

            <Button className={classes.LoginLayoutButton}
                href="/signup"
                component={Link}
                variant="contained">
                <Typography variant="button">NEXT</Typography>
            </Button>

            <Typography className={classes.LoginLayoutOption}>
                or login with
            </Typography>

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

            <Box className={classes.LoginLayoutOption} display={"flex"} flexDirection={"row"}>
                <Typography className={classes.LoginLayoutSignUpText}>
                    Not a member?
                </Typography>
                <Button href="/signup"
                        component={Link}>
                    <Typography >Sign up now</Typography>
                </Button>
            </Box>
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
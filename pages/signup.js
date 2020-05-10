import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box,Typography} from "@material-ui/core";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import FormDetails from "../src/components/demo/register_form";

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        background:"#F4F2F2"
    },
    expand_w: {
        width: "100%",
    },
    padding: {
        padding: theme.spacing(10),
    },

    TitleLayer:{
        height:"555px",
        width:"1600px",
        borderRadius:"1px",
        background:"#6984E2"
    }, ContentMarginLeft:{
        marginTop:"9%",
        marginLeft:"15%",
    },TextWidth:{
        width:"44%"
    },

    InputTextLayer:{
        marginTop:"-10%",
        height:"2707px",
        width:"1166px",
        marginLeft:"15%",
        marginRight:"15%",
        background:"#FFFFFF",
        borderRadius:"4px",
        marginBottom:"15%",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)"
    },InputFieldTitle:{
        marginTop:"3.48%",
        marginLeft:"6.86%"
    },

}));

function Background2(props){
    const {classes} = props;
    const [states, setStates] = React.useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        website: "",
        address: "",
        gender:'0',
        birthday: ""
    });

    const handleChange = (prop) => (event) => {
        setStates({ ...states, [prop]: event.target.value });
    };

    return(
        <Grid container className={classes.InputTextLayer}>
            <Grid item xs={12}>
                <Box
                    className={classes.InputFieldTitle}
                    fontFamily="Roboto"
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="64px"
                    lineHeight="75px"
                    color="#6984E2"
                >
                    Basic
                </Box>
            </Grid>

            {FormDetails.map((inputs) => (
                <Grid
                    item
                    key={inputs.id}
                    xs={inputs.columns}
                    className={classes.padding}
                >
                    {inputs.type === "text" && (
                        <TextField
                            fullWidth
                            label={inputs.label}
                            onChange={handleChange(inputs.id)}
                            value={states[inputs.id]}
                        />
                    )}
                    {inputs.type === "select" && (
                        <TextField
                            select
                            fullWidth
                            label={inputs.label}
                            onChange={handleChange(inputs.id)}
                            value={states[inputs.id]}
                        >
                            {inputs.select.map((val, index) => (
                                <MenuItem key={val + index} value={index} children={val} />
                            ))}
                        </TextField>
                    )}
                </Grid>
            ))}
        </Grid>
    );
}


function Background1(props){
    const {classes} = props;

    function StyledBox(props){
        return(
            <Box
                fontFamily="Roboto"
                fontStyle="normal"
                fontWeight= "normal"
                fontSize="45px"
                lineHeight="56px"
                color={"#FFFFFF"}
                {...props}/>
        );
    }

    return(
        <Box className={classes.TitleLayer} display={"flex"} flexDirecion={"row"}>
            <Box className={clsx(classes.ContentMarginLeft,classes.TextWidth)}>
                <StyledBox display={"inline"}>
                    Please provide a
                </StyledBox>
                <Box display={"inline"}
                     fontFamily="Roboto"
                     fontStyle="normal"
                     fontWeight= "normal"
                     fontSize="150px"
                     lineHeight="56px"
                     color={"#FFFFFF"}>
                    Bit
                </Box>
                <StyledBox>
                    more info to help us build your
                </StyledBox>
                <Box display={"inline"}
                     fontFamily="Roboto"
                     fontStyle="normal"
                     fontWeight= "normal"
                     fontSize="100px"
                     lineHeight="120px"
                     color={"#FFFFFF"}>
                    profile
                </Box>
            </Box>
            <img src={"register_1.svg"} height={"90%"} width={"25%"}/>
        </Box>
    );
}

export default function signupPage() {
    const classes = useStyles();
    return (
        <Grid>
            <Grid container className={classes.root}>
                <Background1 classes={classes}/>
                <Background2 classes={classes}/>
            </Grid>
        </Grid>
    );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box,Typography} from "@material-ui/core";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import form_Details from "../src/components/demo/register_form";

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
        background:"#6984E2"
    }, ContentMarginLeft:{
        marginTop:"9%",
        marginLeft:"15%",
    },TextWidth:{
        width:"44%"
    },

    InputTextLayer:{
        marginTop:"-10%",
        marginBottom:"15%",
        width:"70%",
        background:"#FFFFFF",
        borderRadius:"4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)"
    }

}));



function Form(props){
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

    function StyledBox(props){
        return(
            <Grid item xs={12}>
                <Box
                    fontFamily="Roboto"
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="64px"
                    lineHeight="75px"
                    color="#6984E2"
                    {...props}/>
            </Grid>
        );
    }
    return(
        <Grid container className={classes.InputTextLayer} >
            {form_Details.map((Inputs) => (
            <Grid
                item
                key={Inputs.id}
                xs={Inputs.columns}
                className={classes.padding}>

                {Inputs.type === "title" && (
                    <StyledBox>{Inputs.title}</StyledBox>
                )}

                {Inputs.type === "text" && (
                    <TextField
                        fullWidth
                        floatingLabelText={Inputs.label}
                        floatingLabelFixed={true}
                        placeholder={Inputs.placeholder}
                        onChange={handleChange(Inputs.id)}
                        value={states[Inputs.id]}
                    />
                )}

                {Inputs.type === "select" && (
                    <TextField
                        select
                        fullWidth
                        label={Inputs.label}
                        onChange={handleChange(Inputs.id)}
                        value={states[Inputs.id]}
                    >
                        {Inputs.select.map((val, index) => (
                            <MenuItem key={val + index} value={index} children={val} />
                        ))}
                    </TextField>
                )}
            </Grid>
            ))}
        </Grid>
    );
}


function Heading(props){
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
            <Grid container className={classes.root} justify="center">
                <Heading classes={classes}/>
                <Form classes={classes}/>
            </Grid>
        </Grid>
    );
}
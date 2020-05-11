import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box,Typography} from "@material-ui/core";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import {Basic, Education, Experience, Interests} from "../src/components/demo/register_form";

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


function FormInterestsPart(props){
    const {classes} = props;
    const [states, setStates] = React.useState({
        firstName: "",
        lastName: "",
    });

    const handleChange = (prop) => (event) => {
        setStates({ ...states, [prop]: event.target.value });
    };
    return(
        Interests.map((InterestInputs) => (
            <Grid
                item
                key={InterestInputs.id}
                xs={InterestInputs.columns}
                className={classes.padding}
            >
                {InterestInputs.type === "text" && (
                    <TextField
                        fullWidth
                        label={InterestInputs.label}
                        onChange={handleChange(InterestInputs.id)}
                        value={states[InterestInputs.id]}
                    />
                )}
                {InterestInputs.type === "select" && (
                    <TextField
                        select
                        fullWidth
                        label={InterestInputs.label}
                        onChange={handleChange(InterestInputs.id)}
                        value={states[InterestInputs.id]}
                    >
                        {InterestInputs.select.map((val, index) => (
                            <MenuItem key={val + index} value={index} children={val} />
                        ))}
                    </TextField>
                )}
            </Grid>
        ))
    );
}

function FormExperiencePart(props){
    const {classes} = props;
    const [states, setStates] = React.useState({
        firstName: "",
        lastName: "",
    });

    const handleChange = (prop) => (event) => {
        setStates({ ...states, [prop]: event.target.value });
    };

    return(
        Experience.map((ExperienceInputs) => (
            <Grid
                item
                key={ExperienceInputs.id}
                xs={ExperienceInputs.columns}
                className={classes.padding}
            >
                {ExperienceInputs.type === "text" && (
                    <TextField
                        fullWidth
                        label={ExperienceInputs.label}
                        onChange={handleChange(ExperienceInputs.id)}
                        value={states[ExperienceInputs.id]}
                    />
                )}
                {ExperienceInputs.type === "select" && (
                    <TextField
                        select
                        fullWidth
                        label={ExperienceInputs.label}
                        onChange={handleChange(ExperienceInputs.id)}
                        value={states[ExperienceInputs.id]}
                    >
                        {ExperienceInputs.select.map((val, index) => (
                            <MenuItem key={val + index} value={index} children={val} />
                        ))}
                    </TextField>
                )}
            </Grid>
        ))
    );
}

function FormEducationPart(props){
    const {classes} = props;
    const [states, setStates] = React.useState({
        firstName: "",
        lastName: "",
    });

    const handleChange = (prop) => (event) => {
        setStates({ ...states, [prop]: event.target.value });
    };

    return(
        Education.map((EducationInputs) => (
            <Grid
                item
                key={EducationInputs.id}
                xs={EducationInputs.columns}
                className={classes.padding}
            >
                {EducationInputs.type === "text" && (
                    <TextField
                        fullWidth
                        label={EducationInputs.label}
                        onChange={handleChange(EducationInputs.id)}
                        value={states[EducationInputs.id]}
                    />
                )}
                {EducationInputs.type === "select" && (
                    <TextField
                        select
                        fullWidth
                        label={EducationInputs.label}
                        onChange={handleChange(EducationInputs.id)}
                        value={states[EducationInputs.id]}
                    >
                        {EducationInputs.select.map((val, index) => (
                            <MenuItem key={val + index} value={index} children={val} />
                        ))}
                    </TextField>
                )}
            </Grid>
        ))
    )
}

function FormBasicPart(props){
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
        Basic.map((BasicInputs) => (
                <Grid
                    item
                    key={BasicInputs.id}
                    xs={BasicInputs.columns}
                    className={classes.padding}
                >
                    {BasicInputs.type === "text" && (
                        <TextField
                            fullWidth
                            label={BasicInputs.label}
                            placeholder={BasicInputs.placeholder}
                            onChange={handleChange(BasicInputs.id)}
                            value={states[BasicInputs.id]}
                        />
                    )}
                    {BasicInputs.type === "select" && (
                        <TextField
                            select
                            fullWidth
                            label={BasicInputs.label}
                            onChange={handleChange(BasicInputs.id)}
                            value={states[BasicInputs.id]}
                        >
                            {BasicInputs.select.map((val, index) => (
                                <MenuItem key={val + index} value={index} children={val} />
                            ))}
                        </TextField>
                    )}
                </Grid>
        ))
    );
}

function Background2(props){
    const {classes} = props;

    function StyledBox(props){
        return(
            <Grid item xs={12}>
                <Box
                    className={classes.InputFieldTitle}
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
        <Grid container className={classes.InputTextLayer}>
            <StyledBox>Basic</StyledBox>
            <FormBasicPart classes={classes}/>

            <StyledBox>Education</StyledBox>
            <FormEducationPart classes={classes}/>

            <StyledBox>Experience</StyledBox>
            <FormExperiencePart classes={classes}/>

            <StyledBox>Interests</StyledBox>
            <FormInterestsPart classes={classes}/>
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
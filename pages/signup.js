import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box,Typography , InputLabel} from "@material-ui/core";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import form_Details from "../src/components/demo/register_form";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        background:"#F4F2F2"
    },
    expand_w: {
        width: "100%",
    },
    padding: {
        padding: theme.spacing(3),
        marginLeft:"5%",
    },
    title_margin_top:{
        marginTop:"5%"
    },
    text_field_margin:{
        marginBottom:"5%"
    },

    TitleLayer:{
        width:"100%",
        background:"#6984E2"
    },
    ContentMargin:{
        marginTop:"9%",
        marginLeft:"12%",
        marginBottom:"10%"
    },TextWidth:{
        width:"44%"
    },

    InputTextLayer:{
        marginTop:"-10%",
        marginBottom:"15%",
        width:"76%",
        background:"#FFFFFF",
        borderRadius:"4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)"
    }

}));



function Form(props){
    const {classes} = props;

    const [states, setStates] = React.useState({
        firstName: "", lastName: "", phoneNumber: "", email: "", website: "", address: "",
        gender:'0', birthday: "",password:"",showPassword: false,

        countryOrDistinct:"", school:"", otherStudyField:"",

        companyOrOrganizationName:"", position:"", description:"",

        interests:"",

        abilities:""
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

    function StyledTitleBox(props){
        return(
            <Grid item xs={12} >
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
    function StyledTextFieldLabelBox(props){
        return(
            <Grid item xs={12} >
                <Box className={classes.text_field_margin}
                    fontFamily="Roboto"
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="24px"
                    lineHeight="28px"
                    color="#000000"
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
                    <StyledTitleBox className={classes.title_margin_top}>{Inputs.title}</StyledTitleBox>
                )}

                {Inputs.type === "text" && (
                    <Box>
                        <StyledTextFieldLabelBox>
                            {Inputs.label}
                        </StyledTextFieldLabelBox>
                        <TextField
                            fullWidth
                            floatingLabel={Inputs.label}
                            floatingLabelFixed={true}
                            placeholder={Inputs.placeholder}
                            onChange={handleChange(Inputs.id)}
                            value={states[Inputs.id]}
                        />
                    </Box>
                )}

                {Inputs.type === "select" && (
                    <Box>
                        <StyledTextFieldLabelBox>
                            {Inputs.label}
                        </StyledTextFieldLabelBox>
                        <TextField
                            select
                            fullWidth
                            placeholder={Inputs.label}
                            onChange={handleChange(Inputs.id)}
                            value={states[Inputs.id]}
                        >
                            {Inputs.select.map((val, index) => (
                                <MenuItem key={val + index} value={index} children={val} />
                            ))}
                        </TextField>
                    </Box>
                )}

                {Inputs.type === "password" && (
                    <Box>
                        <StyledTextFieldLabelBox>
                            {Inputs.label}
                        </StyledTextFieldLabelBox>
                        <TextField
                            fullWidth
                            type={states.showPassword ? 'text' : 'password'}
                            value={states.password}
                            onChange={handleChange('password')}
                            InputProps={{
                                endAdornment:(
                                <InputAdornment position="start">
                                <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {states.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                                )
                            }}

                        />
                    </Box>
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
        <Box className={classes.TitleLayer} display={"flex"} flexDirecion={"space-between"}>
            <Box className={clsx(classes.ContentMargin,classes.TextWidth)}>
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
            <img src={"register_1.svg"} height={"90%"} width={"30%"}/>
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
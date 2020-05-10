import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box,Typography} from "@material-ui/core";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        background:"#F4F2F2"
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
    },InputFieldBox:{
        marginTop:"3.48%",
        marginLeft:"6.86%",
    },InputFieldBoxStyle1:{
        marginRight:"3%",
        width:"30%"
    },InputFieldBoxStyle2:{
        marginRight:"3%",
        width:"20%"
    },InputFieldBoxStyle3:{
        marginRight:"3%",
        width:"60%"
    }

}));

function Background2(props){
    const {classes} = props;
    const [states, setStates] = React.useState({
        firstName: 'First Name',
        lastName: 'Last Name',
        phoneNumber:'Phone Number',
        email:'Email',
        website:'Website',
        address:'Address',
        gender:'0',
        birthday:'Birthday'
    });

    const handleChange = (prop) => (event) => {
        setStates({ ...states, [prop]: event.target.value });
    };

    return(
        <Box className={classes.InputTextLayer} display={"flex"} flexDirection={"column"}>
            <Box className={classes.InputFieldTitle}
                 fontFamily="Roboto"
                 fontStyle= "normal"
                 fontWeight="normal"
                 fontSize="64px"
                 lineHeight="75px"
                 color="#6984E2">
                Basic
            </Box>

            <Box className={classes.InputFieldBox} display={"flex"} flexDirection="row" >
                <FormControl className={classes.InputFieldBoxStyle1}>
                    <InputLabel>First Name</InputLabel>
                    <Input
                        id="First Name"
                        value={states.firstName}
                        onChange={handleChange('firstName')}
                    />
                </FormControl>
                <FormControl className={classes.InputFieldBoxStyle1}>
                    <InputLabel>Last Name</InputLabel>
                    <Input
                        id="Last Name"
                        value={states.lastName}
                        onChange={handleChange('lastName')}
                    />
                </FormControl>
            </Box>

            <Box className={classes.InputFieldBox} display={"flex"} flexDirection={"row"}>
                <FormControl className={classes.InputFieldBoxStyle2}>
                    <InputLabel>Phone Number</InputLabel>
                    <Input
                        id="Phone Number"
                        value={states.phoneNumber}
                        onChange={handleChange('phoneNumber')}
                    />
                </FormControl>
                <FormControl className={classes.InputFieldBoxStyle2}>
                    <InputLabel>Email</InputLabel>
                    <Input
                        id="Email"
                        value={states.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <FormControl className={classes.InputFieldBoxStyle2}>
                    <InputLabel>Website</InputLabel>
                    <Input
                        id="Website"
                        value={states.website}
                        onChange={handleChange('website')}
                    />
                </FormControl>
            </Box>

            <Box className={classes.InputFieldBox}>
                <FormControl className={classes.InputFieldBoxStyle3}>
                    <InputLabel>Address</InputLabel>
                    <Input
                        id="Address"
                        value={states.address}
                        onChange={handleChange('address')}
                    />
                </FormControl>
            </Box>

            <Box className={classes.InputFieldBox}>
                <FormControl className={classes.InputFieldBoxStyle1}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={states.gender}
                            onChange={handleChange('gender')}>

                            <MenuItem value={0}>Male</MenuItem>
                            <MenuItem value={1}>Female</MenuItem>
                            <MenuItem value={2}>Intersex</MenuItem>
                            <MenuItem value={3}>Shemale</MenuItem>
                            
                        </Select>
                </FormControl>
                <FormControl className={classes.InputFieldBoxStyle2}>
                    <InputLabel>Birthday</InputLabel>
                    <Input
                        id="Birthday"
                        value={states.birthday}
                        onChange={handleChange('birthday')}
                    />
                </FormControl>
            </Box>
        </Box>
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
                fontSize="48px"
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
                    more info to help us bild your
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
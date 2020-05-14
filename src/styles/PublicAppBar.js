import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    loginButton: {
      boxShadow: `0px 5px 5px ${fade("#253102", 0.1)}`,
      borderRadius: '50px',
      background: 'inherit',
      '&:hover': {
        background: 'inherit',
      },
    },
    loginArrow: {
      color: theme.palette.primary.main,
    },
  
    divider: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  
    appbar: {
      position: "absolute",
      background: "transparent",
      boxShadow: "none",
    },
    space: {
      flexGrow: 1,
    },
    
    footer: {
        flexGrow: 1,
        marginBottom: theme.spacing(2),
        display: "flex",
        flexDirection: "horizontal",
        marginLeft:"10%",
        marginRight:"10%"
    },
    footTitle:{
        width:"90%",
        marginTop:"5%",
        marginLeft:"10%",
        marginBottom:"5%"
    },
    footButton:{
        borderRadius:"50px",
        height:"56px",
        width:"170px"
    },
    footButtonMargin1:{
        marginLeft:"45%"
    },
    footButtonMargin2:{
        marginLeft:"5%"
    },
    footButtonStyle1:{
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },footButtonStyle2:{
        boxShadow: "0px 5px 5px rgba(75, 93, 104, 0.1)",
        backgroundColor:theme.palette.background,
        "&:hover": {
            backgroundColor: theme.palette.background,
        },
    },footArrow:{
        marginTop:"1%",
        marginLeft:"20%"
    },
    footInfo: {
        width: "40%",
    },
    footOther: {
        width: "20%",
        alignContent: "center",
    },
  }));

  export default useStyles;
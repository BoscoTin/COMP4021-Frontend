import {Tabs, Tab} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

const StyledTabs = withStyles({
    root: {
      borderBottom: "1px solid #F5F5F5",
    },
    indicator: {
      backgroundColor: "#006EFF",
    },
  })(Tabs);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: "none",
      minWidth: 150,
      fontWeight: theme.typography.fontWeightLight,
      fontFamily: "Asap",
      fontStyle: "normal",
      "&:hover": {
        color: "#40a9ff",
        opacity: 1,
      },
      "&$selected": {
        color: "#1890ff",
        fontWeight: 500,
      },
      "&:focus": {
        color: "#40a9ff",
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);


  export {StyledTab, StyledTabs}
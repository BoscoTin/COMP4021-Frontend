import { Tabs, Tab, Typography, Grid, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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

function InfoTabPanel(props) {
  const { data, value } = props;

  if (data !== null ){
    return (
      <React.Fragment>
        {value === 0 && (
          <React.Fragment>
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Phone number</Typography>
            </Grid>
            <Grid item md={4} xs={8}>
              <Typography variant="body1">{data.phone_number === null ? "" : data.phone_number}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Gender</Typography>
            </Grid>
            <Grid item md={4} xs={8}>
              <Typography variant="body1">{data.gender === null ? "" : data.gender}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Address</Typography>
            </Grid>
            <Grid item md={4} xs={8}>
              <Typography variant="body1">{data.address === null ? "" : data.address}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Birthday</Typography>
            </Grid>
            <Grid item md={4} xs={8}>
              <Typography variant="body1">{data.date_of_birth === null ? "" : data.date_of_birth}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Email</Typography>
            </Grid>
            <Grid item md={10} xs={8}>
              <Typography variant="body1">{data.email === null ? "" : data.email}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Website</Typography>
            </Grid>
            <Grid item md={10} xs={8}>
              <Typography variant="body1">{data.website === null ? "" : data.website}</Typography>
            </Grid>
          </React.Fragment>
        )}
  
        {value === 1 && 
          <React.Fragment>
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Location</Typography>
            </Grid>
            <Grid item md={10} xs={8}>
              <Typography variant="body1">{data.country_distinct === null ? "" : data.country_distinct}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">School</Typography>
            </Grid>
            <Grid item md={10} xs={8}>
              <Typography variant="body1">{data.school === null ? "" : data.school}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Study Field</Typography>
            </Grid>
            <Grid item md={10} xs={8}>
              <Typography variant="body1">{data.study_field === null ? "" : data.study_field}</Typography>
            </Grid>
          </React.Fragment>
        }
  
        {value === 2 && 
          <React.Fragment>
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Company or Organization</Typography>
            </Grid>
            <Grid item md={10} xs={8}>
              <Typography variant="body1">{data.company_organization === null ? "" : data.company_organization}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Position</Typography>
            </Grid>
            <Grid item md={10} xs={8}>
              <Typography variant="body1">{data.position === null ? "" : data.position}</Typography>
            </Grid>
  
            <Grid item md={2} xs={4}>
              <Typography variant="body1">Description</Typography>
            </Grid>
            <Grid item md={10} xs={8}>
              <Typography variant="body1">{data.description === null ? "" : data.description}</Typography>
            </Grid>
          </React.Fragment>
        }
  
        {value === 3 && 
          <React.Fragment>
            {data.interests !== null && data.interests.map( (interest, index) =>
              <Grid item md={3} xs={4} key={interest + index}>
                <Typography variant="body1">
                  {interest}
                </Typography>
              </Grid>
            )}
          </React.Fragment>
        }
      </React.Fragment>
    );
  } else {
    return <CircularProgress />
  }
}

export { StyledTab, StyledTabs, InfoTabPanel };

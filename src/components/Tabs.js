import {Tabs, Tab, Typography} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"
import {PropTypes} from 'prop-types';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

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

const StyledTableContainer = withStyles({
  border: 'none'
})(TableContainer);

const StyledTableCell = withStyles({
  root: {
    border: 'none'
  }
})(TableCell);

function InfoTabPanel(props) {
  const { data, value, index, ...other } = props;

  let table;
  if (data.category == "Basic") {
    table = <StyledTableContainer> 
      <Table>
        <TableBody>
          <TableRow>
            <StyledTableCell align="left"> Phone Number </StyledTableCell>
            <StyledTableCell align="left"> {data.phoneNumber} </StyledTableCell>
            <StyledTableCell align="left"> Gender </StyledTableCell>
            <StyledTableCell align="left"> {data.gender} </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align="left"> Address </StyledTableCell>
            <StyledTableCell align="left"> {data.address} </StyledTableCell>
            <StyledTableCell align="left"> Birthday </StyledTableCell>
            <StyledTableCell align="left"> {data.birthday} </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align="left"> Email </StyledTableCell>
            <StyledTableCell align="left"> {data.email} </StyledTableCell>
            <StyledTableCell align="left" />
            <StyledTableCell align="left"/>
          </TableRow>
          <TableRow>
            <StyledTableCell align="left"> Website </StyledTableCell>
            <StyledTableCell align="left"> {data.website} </StyledTableCell>
            <StyledTableCell align="left" />
            <StyledTableCell align="left"/>
          </TableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  } 
  else if (data.category == "Education") {
    table = <StyledTableContainer>
      <Table>
      <TableRow>
        <StyledTableCell align="left"> Location </StyledTableCell>
        <StyledTableCell align="left"> {data.location} </StyledTableCell>
        <StyledTableCell align="left" />
        <StyledTableCell align="left"/>
      </TableRow>
      <TableRow>
        <StyledTableCell align="left"> School </StyledTableCell>
        <StyledTableCell align="left"> {data.school} </StyledTableCell>
        <StyledTableCell align="left" />
        <StyledTableCell align="left"/>
      </TableRow>
      <TableRow>
        <StyledTableCell align="left"> Study Field </StyledTableCell>
        <StyledTableCell align="left"> {data.studyField} </StyledTableCell>
        <StyledTableCell align="left" />
        <StyledTableCell align="left"/>
      </TableRow>
      </Table>
    </StyledTableContainer>
  }
  else if (data.category == "Experience") {
    table = <StyledTableContainer>
      <Table>
      <TableRow>
        <StyledTableCell align="left"> Company or organization </StyledTableCell>
        <StyledTableCell align="left"> {data.organization} </StyledTableCell>
        <StyledTableCell align="left" />
        <StyledTableCell align="left"/>
      </TableRow>
      <TableRow>
        <StyledTableCell align="left"> Position </StyledTableCell>
        <StyledTableCell align="left"> {data.position} </StyledTableCell>
        <StyledTableCell align="left" />
        <StyledTableCell align="left"/>
      </TableRow>
      <TableRow>
        <StyledTableCell align="left"> Description </StyledTableCell>
        <StyledTableCell align="left"> {data.description} </StyledTableCell>
        <StyledTableCell align="left" />
        <StyledTableCell align="left"/>
      </TableRow>
      </Table>
    </StyledTableContainer>
  }
  else if (data.category == "Interest") {
    table = <Typography> {data.interests.toString()} </Typography>
  }
  else {
    table = <Typography> other </Typography>
  }

  return (
    <div role="tabpanel" hidden={value != index} id={`tabpanel-${index}`} {...other} >
      {value === index && ( <Box p={3}> 
        {table}
      </Box>)}
    </div>
  )
}

InfoTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


export {StyledTab, StyledTabs, InfoTabPanel}
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import AdminListItem from "../AdminListItem/AdminListItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#00b8d4",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class AdminPage extends Component {
  componentDidMount() {
    console.log("Component App Did Mount");
    this.getFeedback();
  }
  // get all feedback data from server from database and store in feedback reducer
  getFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(response.data);
        this.props.dispatch({
          type: "SET_FEEDBACK",
          payload: [...response.data],
        });
      })
      .catch((error) => {
        console.log("GET SERVER ERROR: ", error);
      });
  };

  render() {
    // map/loop through the feedback reducer and display on page
    const feedbackArray = this.props.store.feedbackReducer.map(
      (item, index) => {
        return (
          <AdminListItem
            item={item}
            key={index}
            getFeedback={this.getFeedback}
          />
        );
      }
    );

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Feedback Results!</h1>
        </header>
        <br />
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Feeling</StyledTableCell>
                <StyledTableCell align="center">Comprehension</StyledTableCell>
                <StyledTableCell align="center">Support</StyledTableCell>
                <StyledTableCell align="center">Comments</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
                <StyledTableCell align="center">Flag</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{feedbackArray}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminPage);

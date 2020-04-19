import React, { Component } from "react";
import axios from "axios";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import FlagIcon from "@material-ui/icons/Flag";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

class AdminListItem extends Component {
  // require confirmation prior to delete existing feedback from database
  handleDelete = (id) => (event) => {
    const deleteFeedback = window.confirm("Press OK to Confirm Deletion");
    if (!deleteFeedback) {
      return;
    } else {
      axios
        .delete(`/feedback/${id}`)
        .then((response) => {
          console.log(response.data);
          this.props.getFeedback();
        })
        .catch((error) => {
          console.log("DELETE SERVER ERROR: ", error);
        });
    }
  };
  // update flagged status when flag icon is clicked
  clickFlag = (id, flaggedStatus) => (event) => {
    console.log(id, flaggedStatus);
    const flaggedData = {
      flagged: !flaggedStatus,
    };
    console.log(flaggedData);

    axios
      .put(`/feedback/${id}`, flaggedData)
      .then((response) => {
        console.log(response.data);
        this.props.getFeedback();
      })
      .catch((error) => {
        console.log("PUT ERROR: ", error);
      });
  };

  render() {
    // when flag status is false (the default), the color of the flag icon is black
    // when flag status is true, the color of the flag icon is changed to red
    let flaggedIconColor = "inherit";
    if (this.props.item.flagged) {
      flaggedIconColor = "secondary";
    }
    return (
      <StyledTableRow>
        <StyledTableCell align="center">
          {this.props.item.feeling}
        </StyledTableCell>
        <StyledTableCell align="center">
          {this.props.item.understanding}
        </StyledTableCell>
        <StyledTableCell align="center">
          {this.props.item.support}
        </StyledTableCell>
        <StyledTableCell align="center">
          {this.props.item.comments}
        </StyledTableCell>
        <StyledTableCell align="center">
          <DeleteSweepIcon onClick={this.handleDelete(this.props.item.id)} />
        </StyledTableCell>
        <StyledTableCell align="center">
          <FlagIcon
            color={flaggedIconColor}
            onClick={this.clickFlag(
              this.props.item.id,
              this.props.item.flagged
            )}
          />
        </StyledTableCell>
      </StyledTableRow>
    );
  }
}

export default AdminListItem;

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class AdminListItem extends Component {
  handleDelete = (id) => (event) => {
    axios
      .delete(`/feedback/${id}`)
      .then((response) => {
        console.log(response.data);
        this.props.getFeedback();
      })
      .catch((error) => {
        console.log("DELETE SERVER ERROR: ", error);
      });
  };
  render() {
    return (
      <tr>
        <td>{this.props.item.feeling}</td>
        <td>{this.props.item.understanding}</td>
        <td>{this.props.item.support}</td>
        <td>{this.props.item.comments}</td>
        <td>
          <button onClick={this.handleDelete(this.props.item.id)}>
            Delete
          </button>
        </td>
        <td>{this.props.item.flagged}</td>
      </tr>
    );
  }
}

export default connect()(AdminListItem);

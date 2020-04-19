import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import AdminListItem from "../AdminListItem/AdminListItem";

class AdminPage extends Component {
  state = {
    feedback: [],
  };
  componentDidMount() {
    console.log("Component App Did Mount");
    this.getFeedback();
  }

  getFeedback() {
    axios
      .get("/feedback")
      .then((response) => {
        this.setState(
          {
            feedback: [...response.data],
          },
          () => {
            console.log(this.state.feedback);
          }
        );
      })
      .catch((error) => {
        console.log("GET SERVER ERROR: ", error);
      });
  }

  render() {
    const feedbackArray = this.state.feedback.map((item, index) => {
      return (
        <AdminListItem item={item} key={index} getFeedback={this.getFeedback} />
      );
    });
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Feedback Results!</h1>
        </header>
        <br />
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
              <th>Flag</th>
            </tr>
          </thead>
          <tbody>{feedbackArray}</tbody>
        </table>
      </div>
    );
  }
}

export default connect()(AdminPage);

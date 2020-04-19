import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import AdminListItem from "../AdminListItem/AdminListItem";

class AdminPage extends Component {
  componentDidMount() {
    console.log("Component App Did Mount");
    this.getFeedback();
  }

  getFeedback() {
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
  }

  render() {
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

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminPage);

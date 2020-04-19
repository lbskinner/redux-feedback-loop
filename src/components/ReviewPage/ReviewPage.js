import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

class ReviewPage extends Component {
  // store all input values from reducers to an object to be sent to server
  submitFeedback = (event) => {
    const feedback = {
      feeling: this.props.store.feelingReducer.feeling,
      understanding: this.props.store.understandingReducer.understanding,
      support: this.props.store.supportReducer.support,
      comments: this.props.store.commentsReducer.comments,
    };
    // set feedback data to server
    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/success");
      })
      .catch((error) => {
        console.log("POST SERVER ERROR: ", error);
      });
  };
  // takes the user to feeling page to update input
  updateFeeling = (event) => {
    this.props.history.push("/");
  };
  // takes the user to understanding page to update input
  updateUnderstanding = (event) => {
    this.props.history.push("/understanding");
  };
  // takes the user to support page to update input
  updateSupport = (event) => {
    this.props.history.push("/support");
  };
  // takes the user to comments page to update input
  updateComments = (event) => {
    this.props.history.push("/comments");
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <h2>Review Your Feedback</h2>
        <Grid container justify="center">
          <Grid item xs={3}>
            <p>Feelings: {this.props.store.feelingReducer.feeling}</p>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={this.updateFeeling}>
              Update
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={3}>
            <p>
              Understanding:{" "}
              {this.props.store.understandingReducer.understanding}
            </p>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={this.updateUnderstanding}>
              Update
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={3}>
            <p>Support: {this.props.store.supportReducer.support}</p>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={this.updateSupport}>
              Update
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={3}>
            <p>Comments: {this.props.store.commentsReducer.comments}</p>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={this.updateComments}>
              Update
            </Button>
          </Grid>
        </Grid>
        <Button variant="contained" onClick={this.submitFeedback}>
          SUBMIT
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewPage);

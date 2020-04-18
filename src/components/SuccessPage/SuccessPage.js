import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class SuccessPage extends Component {
  newFeedbackClicked = (event) => {
    // go to the beginning of the page to start again
    this.props.history.push("/");
    // reset feedback reducers
    this.props.dispatch({ type: "RESET_FEEDBACK" });
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
        </header>
        <br />
        <div>
          <h3>Thank You for Submitting Your Feedback!</h3>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.newFeedbackClicked}
          >
            Leave New Feedback
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(SuccessPage);

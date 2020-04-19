import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class UnderstandingPage extends Component {
  // set the current state to the current reducer value so when user wants to update their feedback
  // the values previously enter is displayed in the input field
  state = {
    understanding: this.props.store.understandingReducer.understanding,
  };
  // set current input value to state
  handleChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };
  // dispatch input value to reducer
  handleClick = (event) => {
    if (!this.state.understanding) {
      alert("Please enter a number between 1 to 5!");
    } else {
      this.props.dispatch({
        type: "SET_UNDERSTANDING",
        payload: this.state,
      });
      this.props.history.push("/support");
    }
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
        <h2>How well are you understanding the content?</h2>
        <Grid container justify="space-around">
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <TextField
              label="Understanding?"
              type="number"
              min="1"
              max="5"
              placeholder="Enter number 1 to 5"
              defaultValue={this.state.understanding}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={this.handleClick}>
              NEXT
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(UnderstandingPage);

import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class UnderstandingPage extends Component {
  state = {
    understanding: "",
  };

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  handleClick = (event) => {
    this.props.dispatch({
      type: "SET_UNDERSTANDING",
      payload: this.state,
    });
  };

  render() {
    return (
      <div>
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

export default connect()(UnderstandingPage);

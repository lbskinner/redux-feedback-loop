import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class FeelingPage extends Component {
  state = {
    feeling: "",
  };

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  handleClick = (event) => {
    this.props.dispatch({
      type: "SET-FEELING",
      payload: this.state,
    });
    this.props.history.push("/understanding");
  };

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <Grid container justify="space-around">
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <TextField
              label="Feeling?"
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

export default connect()(FeelingPage);

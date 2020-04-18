import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class SupportPage extends Component {
  state = {
    support: this.props.store.supportReducer.support,
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      support: event.target.value,
    });
  };

  handleClick = (event) => {
    if (!this.state.support) {
      alert("Please enter a number between 1 to 5!");
    } else {
      this.props.dispatch({
        type: "SET_SUPPORT",
        payload: this.state,
      });
      this.props.history.push("/comments");
    }
  };

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <Grid container justify="space-around">
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <TextField
              label="Support?"
              type="number"
              min="1"
              max="5"
              placeholder="Enter number 1 to 5"
              defaultValue={this.state.support}
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

export default connect(mapStoreToProps)(SupportPage);

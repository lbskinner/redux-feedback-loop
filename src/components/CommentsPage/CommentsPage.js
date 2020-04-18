import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class CommentsPage extends Component {
  state = {
    comments: "",
  };

  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleClick = (event) => {
    this.props.dispatch({
      type: "SET_COMMENTS",
      payload: this.state,
    });
    this.props.history.push("/review");
  };

  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <Grid container justify="space-around">
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <TextField
              label="Comments?"
              type="text"
              placeholder="Enter comments"
              value={this.state.comments}
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

export default connect()(CommentsPage);

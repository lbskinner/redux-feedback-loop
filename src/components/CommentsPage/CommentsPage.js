import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class CommentsPage extends Component {
  state = {
    comments: this.props.store.commentsReducer.comments,
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
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <h2>Any comments you want to leave?</h2>
        <Grid container justify="space-around">
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <TextField
              label="Comments?"
              type="text"
              placeholder="Enter comments"
              defaultValue={this.state.comments}
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

export default connect(mapStoreToProps)(CommentsPage);

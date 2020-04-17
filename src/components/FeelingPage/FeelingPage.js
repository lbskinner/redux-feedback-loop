import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FeelingPage extends Component {
  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <div>
          <div>
            {/* <label>Feeling?</label> <br /> */}
            <TextField
              label="Feeling?"
              //   variant="outlined"
              type="number"
              min="1"
              max="5"
              placeholder="Enter number 1 to 5"
            />
          </div>
          <div>
            <Button variant="contained">NEXT</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(FeelingPage);

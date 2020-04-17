import React, { Component } from "react";
import { connect } from "react-redux";

class UnderstandingPage extends Component {
  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <label>Understanding?</label> <br />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Enter a number from 1 to 5"
        />
        <button>NEXT</button>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);

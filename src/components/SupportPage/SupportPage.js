import React, { Component } from "react";
import { connect } from "react-redux";

class SupportPage extends Component {
  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <label>Support?</label> <br />
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

export default connect()(SupportPage);

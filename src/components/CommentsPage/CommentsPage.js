import React, { Component } from "react";
import { connect } from "react-redux";

class CommentsPage extends Component {
  render() {
    return (
      <div>
        <h2>Any comments you want ti leave?</h2>
        <label>Comments?</label> <br />
        <input type="text" placeholder="Enter comments" />
        <button>NEXT</button>
      </div>
    );
  }
}

export default connect()(CommentsPage);

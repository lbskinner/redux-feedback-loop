import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewPage extends Component {
  render() {
    return <div></div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewPage);

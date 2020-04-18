import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import FeelingPage from "../FeelingPage/FeelingPage";
import UnderstandingPage from "../UnderstandingPage/UnderstandingPage";
import SupportPage from "../SupportPage/SupportPage";
import CommentsPage from "../CommentsPage/CommentsPage";
import ReviewPage from "../ReviewPage/ReviewPage";
import SuccessPage from "../SuccessPage/SuccessPage";
import AdminPage from "../AdminPage/AdminPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/success" component={SuccessPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Router>
      </div>
    );
  }
}

export default App;

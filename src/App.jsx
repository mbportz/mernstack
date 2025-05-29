import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Users from "./user/pages/Users.js";

function App() {
  return (
    <Router>
      <Route path="/">
        <Users />
      </Route>
      <Redirect to="/" />
    </Router>
  );
}

export default App;

import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TxHome from "../pages/Home/TxHome";
import TxTodoManager from "../pages/TodoManager/TxTodoManager";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={TxHome} />
        <Route path="/todo-manager" component={TxTodoManager} />
      </div>
    </Router>
  );
};

export default AppRouter;

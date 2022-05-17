import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Client from "./apollo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={Client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
);


import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ Homepage } />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

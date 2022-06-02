import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Infraestrutura from "./pages/Infraestrutura";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact={true} component={Home} />
        <Route exact path="/sobre" component={About} />
        <Route path="/infraestrutura" component={Infraestrutura} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

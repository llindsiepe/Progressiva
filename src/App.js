import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ListagemParticipantes from "./componentes/ListagemParticipantes.js";
import NovoParticipante from "./componentes/NovoParticipante.js";
import EditaParticipante from "./componentes/EditaParticipante.js";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" exact={true} component={ListagemParticipantes} />
          <Route exact path="/novo" component={NovoParticipante} />
          <Route path="/participantes/:id" component={EditaParticipante} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

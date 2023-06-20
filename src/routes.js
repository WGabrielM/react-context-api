import Feira from "pages/Feira";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import { UsuarioProvider } from "common/context/Usuario";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioProvider>
            <Login />
          </UsuarioProvider>
        </Route>
        <Route exact path="/feira">
          <Feira />
        </Route>
        <Route exact path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

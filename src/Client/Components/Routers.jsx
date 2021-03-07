import { Switch, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import RedirectRoute from "./RedirectRoute";

import App from "./Pages/App/App";
import Login from "./Pages/Login/Login";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute component={App} path="/home" />
        <RedirectRoute component={Login} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

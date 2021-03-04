import { Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./Pages/App/App";
import Login from "./Pages/Login/Login";
  
export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <App />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

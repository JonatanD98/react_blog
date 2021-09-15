import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import { useSelector } from "react-redux";

function App() {
  const loginStatus = useSelector((state) => state.isLoggedIn);

  //other option is to not make the paths exact and make the last path * to catch user mistakes on the path
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/blog" exact>
        <Blog />
      </Route>
      {loginStatus && (
        <Route path="/admin" exact>
          <Admin />
        </Route>
      )}
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default App;

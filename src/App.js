import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import { useSelector } from "react-redux";

function App() {
  const loginStatus = useSelector((state) => state.isLoggedIn);

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

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import classes from "./Nav.module.css";

//Component responsible for navigation
const Nav = () => {
  //Gets the login status from redux so rendering NavLinks conditionally is possible in jsx
  const loginStatus = useSelector((state) => state.isLoggedIn);

  return (
    <nav className={classes.navigation}>
      {/* activeClassName is used to display what page the user is currently on */}
      <NavLink activeClassName={classes.active} to="/home">
        <Button className={classes.btn}>Home</Button>
      </NavLink>
      <NavLink activeClassName={classes.active} to="/blog">
        <Button className={classes.btn}>Blog</Button>
      </NavLink>
      {loginStatus && (
        <NavLink activeClassName={classes.active} to="/admin">
          <Button className={classes.btn}>Admin Panel</Button>
        </NavLink>
      )}
      {!loginStatus && (
        <NavLink activeClassName={classes.active} to="/login">
          <Button className={classes.btn}>Sign In</Button>
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;

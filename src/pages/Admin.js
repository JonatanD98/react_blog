import Button from "../UI/Button";
import classes from "./Admin.module.css";

import BlogPosts from "../components/BlogPosts";
import BlogCreator from "../components/BlogCreator";
import Nav from "../components/Nav";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";

const Admin = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Nav />
      <div>
        <p>Welcome master</p>
      </div>
      <BlogCreator />
      <BlogPosts adminPost={true} />
      <Button onClick={logoutHandler} className={classes.btn}>
        Logout
      </Button>
    </>
  );
};

export default Admin;

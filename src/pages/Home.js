import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import classes from "./Home.module.css";

const Home = () => {
  const loginStatus = useSelector((state) => state.isLoggedIn);
  return (
    <>
      <Nav />
      <header>
        <h1>Welcome to Jonatan's demo React project</h1>
        <div className={classes.bothButtons}>
          <Link to="/blog">
            <Button className={classes.ctaOne}>To blog</Button>
          </Link>
          {!loginStatus && (
            <Link to="/login">
              <Button className={`${classes.ctaTwo}`}>To login</Button>
            </Link>
          )}
          {loginStatus && (
            <Link to="/admin">
              <Button className={`${classes.ctaTwo}`}>To admin panel</Button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Home;

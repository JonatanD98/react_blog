import Nav from "../components/Nav";
import useInput from "../hooks/useInput";
import Card from "../UI/Card";
import classes from "./Login.module.css";

import { useDispatch } from "react-redux";
import { authActions } from "../store/index";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button";

//Component responsible for login form and loging user in
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useInput((email) => email.includes("@")); //useInput takes validation logic as an argument
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordHandler,
  } = useInput((password) => password.trim().length >= 6); //useInput takes validation logic as an argument

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      alert("Form is not valid");
      return;
    }
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjayYLCw58WQCETwfvFWinU3h2dym_9J0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        console.log(response.status);
        throw new Error("Something went wrong with logging in");
      }

      const data = await response.json();

      dispatch(authActions.setIdToken(data.idToken));
      dispatch(authActions.login());
    } catch (err) {
      alert(err.message);
      resetEmailHandler();
      resetPasswordHandler();
      return;
    }

    history.replace("/admin");
  };

  return (
    <>
      <Nav />
      <Card className={classes.card}>
        <form onSubmit={formSubmitHandler} className={classes.content}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailHasError && (
              <p className={classes.error}>Must enter a valid email</p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
            {passwordHasError && (
              <p className={classes.error}>Password must be more than 5 char</p>
            )}
          </div>
          <Button className={classes.submit} type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Login;

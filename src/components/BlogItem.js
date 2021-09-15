import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";
import Button from "../UI/Button";

import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://bolt-a9e28-default-rtdb.europe-west1.firebasedatabase.app/posts/${props.id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong with deleting the post");
      }
    } catch (err) {
      alert(err.message);
    }

    dispatch(authActions.toggleDataChange());
  };

  return (
    <Card className={classes.cardAnimation}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      {props.adminPost && (
        <Button onClick={deleteHandler} className={classes.btn}>
          Delete post
        </Button>
      )}
    </Card>
  );
};

export default BlogItem;

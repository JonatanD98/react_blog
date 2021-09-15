import classes from "./BlogCreator.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";

//Component for creating new blog posts
const BlogCreator = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://bolt-a9e28-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
        {
          method: "POST",
          body: JSON.stringify({ title: title, text: text }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong with posting the data!");
      }

      setTitle("");
      setText("");
    } catch (err) {
      alert(err.message);
    }
    //Toggeling app-wide state in redux to run the GET request in BlogPosts component
    dispatch(authActions.toggleDataChange());
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            // 2 way binding to reset the input field
            value={title}
            required
          />
        </div>
        <div>
          <label htmlFor="text">text</label>
          <textarea
            type="textfield"
            id="text"
            rows="10"
            cols="50"
            onChange={textChangeHandler}
            //2 way binding to reset the input field
            value={text}
            required
          />
        </div>
        <Button type="submit" className={classes.btn}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default BlogCreator;

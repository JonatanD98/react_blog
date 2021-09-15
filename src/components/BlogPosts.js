import BlogItem from "../components/BlogItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BlogPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const dataChangeStatus = useSelector((state) => state.dataChange);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://bolt-a9e28-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
        );
        if (!response.ok) {
          throw new Error("Somthing went wrong with getting the posts");
        }

        const data = await response.json();

        if (!data) {
          throw new Error("No blogposts set! Make new ones in admin panel");
        }

        const loadedPosts = [];

        for (const key in data) {
          loadedPosts.push({
            id: key,
            title: data[key].title,
            text: data[key].text,
          });
        }

        setPosts(loadedPosts);
      } catch (err) {
        alert(err.message);
      }
    };
    getPosts();
  }, [dataChangeStatus]);

  return (
    <section>
      {posts.map((blog) => {
        return (
          <BlogItem
            title={blog.title}
            text={blog.text}
            id={blog.id}
            key={blog.id}
            adminPost={props.adminPost}
          />
        );
      })}
    </section>
  );
};

export default BlogPosts;

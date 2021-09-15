import Nav from "../components/Nav";
import BlogPosts from "../components/BlogPosts";

// const DUMMY_BLOGS = [
//   { title: "Postaus 1", text: "jodjfojewsdofjoasdjf" },
//   { title: "Postaus 2", text: "psdfjasdjföpojsadpkjfp" },
// ];

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogPosts adminPost={false} />
    </>
  );
};

export default Blog;

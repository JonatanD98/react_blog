import Nav from "../components/Nav";
import BlogPosts from "../components/BlogPosts";

//Page to see the blog posts
const Blog = () => {
  return (
    <>
      <Nav />
      <BlogPosts adminPost={false} />
    </>
  );
};

export default Blog;

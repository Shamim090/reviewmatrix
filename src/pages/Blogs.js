import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const truncrateString = (str, num) => {
    if (str.length > num) return str.slice(0, num) + "...";
    else return str;
  };
  return (
    <div>
      <h1> Blog page</h1>
      {blogs.map((blog) => {
        const { id, title, body } = blog;
        return (
          <article key={id}>
            <h3>{title}</h3>
            <p>{truncrateString(body, 200)}</p>
            <Link to={title}>Lear More</Link>
          </article>
        );
      })}
    </div>
  );
};

export default Blogs;

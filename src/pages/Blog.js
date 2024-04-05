import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../data";

const Blog = () => {
  const { title } = useParams();
  const [bodyData, setBodydata] = useState("");
  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title == title);
    setBodydata(blogData[0].body);
    console.log(bodyData)
  }, []);
  return (
    <div>
      <h1>{title} Page </h1>
      <p>{bodyData}</p>
    </div>
  );
};

export default Blog;

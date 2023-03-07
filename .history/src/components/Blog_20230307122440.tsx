import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "./BlogCardsImages/Image1.jpeg",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    desc: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
  },
];

const Blog = () => {
  return (
    <article>
      <h1>Our blog</h1>
      <section>
        <BlogCard />
      </section>
    </article>
  );
};

export default Blog;

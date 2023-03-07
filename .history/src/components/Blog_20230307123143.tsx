import React from "react";
import BlogCard from "./BlogCard";
import styled from "styled-components";

const data = [
  {
    img: "./BlogCardsImages/Image1.jpeg",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    desc: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
  },
  {
    img: "./BlogCardsImages/Image2.png",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    desc: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
  },
  {
    img: "./BlogCardsImages/Image3.png",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    desc: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
  },
];

const BlogArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 60px 10rem;
`;
const BlogArticleTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  /* Dark blue */

  color: #282938;
`;
const BlogArticleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const Blog = () => {
  return (
    <BlogArticle>
      <BlogArticleTitle>Our blog</BlogArticleTitle>
      <BlogArticleSection>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </BlogArticleSection>
    </BlogArticle>
  );
};

export default Blog;

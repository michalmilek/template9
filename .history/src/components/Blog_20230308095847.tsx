import React from "react";
import BlogCard from "./BlogCard";
import styled from "styled-components";

const data = [
  {
    img: "./BlogCardsImages/Image1.png",
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
    img: "./BlogCardsImages/Imag3.png",
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
  @media (max-width: 1100px) {
    padding: 60px 3rem 10px;
  }
  @media (max-width: 700px) {
    padding: 60px 20px 10px;
  }
`;
const BlogArticleTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  /* Dark blue */

  color: #282938;

  @media (max-width: 640px) {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 36px */

    /* Dark blue */

    color: #282938;
  }
`;
const BlogArticleSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  justify-content: space-between;
  align-items: start;
  align-content: space-between;

  @media (max-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Blog = () => {
  return (
    <BlogArticle>
      <BlogArticleTitle>Our blog</BlogArticleTitle>
      <BlogArticleSection>
        {data.map((item) => (
          <BlogCard
            img={item.img}
            date={item.date}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </BlogArticleSection>
    </BlogArticle>
  );
};

export default Blog;

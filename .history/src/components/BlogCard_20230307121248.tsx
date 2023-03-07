import ArrowIcon from "icons/ArrowIcon";
import React from "react";
import styled from "styled-components";

const BlogCard = () => {
  const BlogCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: start;
    align-items: start;
  `;
  const BlogCardDivImg = styled.img`
    max-width: 405px;
    max-height: 285px;
  `;
  return (
    <BlogCardDiv>
      <img
        src="./BlogCardsImages/Image1.jpeg"
        alt="news thumbnail"
      />
      <span>19 Jan 2022</span>

      <h2>
        How one Webflow user grew his single person consultancy from $0-100K in
        14 months
      </h2>
      <p>
        See how pivoting to Webflow changed one person’s sales strategy and
        allowed him to attract
      </p>

      <a href="/">
        Read more <ArrowIcon />
      </a>
    </BlogCardDiv>
  );
};

export default BlogCard;

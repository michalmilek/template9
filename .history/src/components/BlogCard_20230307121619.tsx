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
    max-width: 405px;
    max-height: 285px;
  `;
  const BlogCardDivImg = styled.img`
    width: 100%;
    height: 100%;
  `;
  const BlogCardDivDate = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    /* Dark blue */

    color: #282938;

    opacity: 0.7;
  `;
  const BlogCardDivTitle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    /* or 150% */

    /* Dark blue */

    color: #282938;
  `;
  const BlogCardDivDesc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* or 175% */

    /* Dark blue */

    color: #282938;

    opacity: 0.7;
  `;
  return (
    <BlogCardDiv>
      <BlogCardDivImg
        src="./BlogCardsImages/Image1.jpeg"
        alt="news thumbnail"
      />
      <BlogCardDivDate>19 Jan 2022</BlogCardDivDate>

      <BlogCardDivTitle>
        How one Webflow user grew his single person consultancy from $0-100K in
        14 months
      </BlogCardDivTitle>
      <BlogCardDivDesc>
        See how pivoting to Webflow changed one person’s sales strategy and
        allowed him to attract
      </BlogCardDivDesc>

      <a href="/">
        Read more <ArrowIcon />
      </a>
    </BlogCardDiv>
  );
};

export default BlogCard;

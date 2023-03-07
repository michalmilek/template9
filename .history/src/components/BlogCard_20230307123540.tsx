import React from "react";
import styled from "styled-components";

type Props = {
  img: string;
  date: string;
  title: string;
  desc: string;
};

const BlogCard = ({ img, date, title, desc }: Props) => {
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
  const BlogCardDivAnchor = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    color: #282938;
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
  `;

  return (
    <BlogCardDiv>
      <BlogCardDivImg
        src={img}
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

      <BlogCardDivAnchor href="/">
        Read more
        <svg
          width="25"
          height="12"
          viewBox="0 0 25 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
            fill="#282938"
          />
        </svg>
      </BlogCardDivAnchor>
    </BlogCardDiv>
  );
};

export default BlogCard;

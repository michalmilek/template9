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
  return (
    <div>
      <img
        src="https://www.pexels.com/photo/arabic-businessman-standing-on-street-and-using-laptop-9623794/"
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
    </div>
  );
};

export default BlogCard;

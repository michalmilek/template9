import Typography from "components/simpleComponents/Typography";
import React from "react";
import styled from "styled-components";
import AboutUsSecondPageCard from "./AboutUsSecondPageCard";

const data = [
  {
    title: "Planning",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Conception",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Design",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Development",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
];

const AboutUsSecondPageSectionArticleThree = () => {
  const Article = styled.article`
    padding: 60px 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;

    @media (max-width: 1100px) {
      padding: 60px 3rem;
    }

    @media (max-width: 768px) {
      padding: 60px 20px;
    }
  `;

  const ArticleDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 40px;
    justify-content: space-between;

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `;

  return (
    <Article>
      <Typography
        type="h1"
        fontSize="4xl"
        text="The process we follow"
        fontWeight={600}
        color="darkBlue"
      />
      <ArticleDiv>
        {data.map(({ title, desc }) => (
          <AboutUsSecondPageCard
            title={title}
            desc={desc}
          />
        ))}
      </ArticleDiv>
    </Article>
  );
};

export default AboutUsSecondPageSectionArticleThree;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const divData = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
      <divData>
        {data.map(({ title, desc }) => (
          <AboutUsSecondPageCard
            title={title}
            desc={desc}
          />
        ))}
      </divData>
    </Article>
  );
};

export default AboutUsSecondPageSectionArticleThree;

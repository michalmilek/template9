import React from "react";
import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

const ProjectsArticle = styled.header`
  padding: 40px 10rem 40px;
  font-family: "Poppins";
`;

const ProjectsArticleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectsArticleHeader_H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  /* Dark blue */

  color: #282938;
`;

const ViewMoreBtn = styled.button`
  font-family: "Poppins";
  display: flex;
  align-items: center;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  border: none;
  background: transparent;
  color: #282938;
  cursor: pointer;
`;

const CustomArrowRight = styled(ArrowRight)`
  height: 20px;
  width: 20px;
  color: #282938;
`;

const Projects = () => {
  return (
    <ProjectsArticle>
      <section>
        <ProjectsArticleHeader>
          <ProjectsArticleHeader_H1>View our Projects</ProjectsArticleHeader_H1>
          <ViewMoreBtn>
            View more <CustomArrowRight />
          </ViewMoreBtn>
        </ProjectsArticleHeader>
      </section>
    </ProjectsArticle>
  );
};

export default Projects;

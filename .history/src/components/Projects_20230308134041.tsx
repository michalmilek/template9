import React from "react";
import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import ArrowBtn from "./simpleComponents/ArrowBtn";

const ProjectsArticle = styled.article`
  padding: 40px 10rem 60px;

  @media (max-width: 768px) {
    padding: 40px 20px 60px;
  }
`;

const ProjectsArticleHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  gap: 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
    gap: 30px;
  }
`;

const ProjectsArticleHeaderH1 = styled.h1`
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

const ProjectsArticleSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media (max-width: 1500px) {
    flex-direction: column;
    flex: 1;
  }
`;

const ProjectsArticleSectionMain = styled.div`
  position: relative;
  flex: 2;
  display: block;

  @media (max-width: 1500px) {
    display: none;
  }
`;

const ProjectsArticleSectionMainImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

const ProjectsArticleSectionMainOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding: 76px 30px;
  position: absolute;
  gap: 16px;
  top: 0;
  left: 0;
  height: 100%;
  width: 44%;
  background: linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  );

  @media (max-width: 1500px) {
    width: 100%;
    padding: 20px 30px;
  } ;
`;

const ProjectsArticleSectionMainOverlayH2 = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* or 150% */

  /* White */

  color: #ffffff;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    color: #ffffff;
  }
`;

const ProjectsArticleSectionMainOverlayP = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  /* White */

  color: #ffffff;

  opacity: 0.8;
  margin-bottom: 24px;

  @media (max-width: 1500px) {
    display: none;
  } ;
`;

const ProjectsArticleSectionMainOverlayBtn = styled.button`
  font-family: "Poppins";
  display: flex;
  align-items: center;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  /* Yellow */

  color: #fcd980;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    /* identical to box height, or 229% */

    color: #ffffff;
  }
`;

const CustomArrowRightGold = styled(ArrowRight)`
  height: 20px;
  width: 20px;
  color: #fcd980;
`;

const ProjectsArticleSectionProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  gap: 16px;
  flex: 1;
  width: 100%;
`;

const ProjectsArticleSectionProjectsDivDiv = styled.div`
  flex: 1;
  position: relative;
  min-height: 300px;

  :first-of-type {
    display: none;
  }

  @media (max-width: 1500px) {
    :first-of-type {
      display: block;
    }
  }
`;

const ProjectsArticleSectionProjectsDivDivImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const ProjectsArticleSectionProjectsDivDivOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding: 45px 30px;
  position: absolute;
  gap: 16px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  );
`;

const ProjectsArticleSectionProjectsDivImg = styled.img`
  flex: 1;
  object-fit: fill;
`;

const Projects = () => {
  return (
    <ProjectsArticle>
      <ProjectsArticleHeader>
        <ProjectsArticleHeaderH1>View our Projects</ProjectsArticleHeaderH1>
        <ViewMoreBtn>
          View more <CustomArrowRight />
        </ViewMoreBtn>
      </ProjectsArticleHeader>
      <ProjectsArticleSection>
        <ProjectsArticleSectionMain>
          <ProjectsArticleSectionMainImg
            src="./Card.png"
            alt="Card logo"
          />
          <ProjectsArticleSectionMainOverlay>
            <ProjectsArticleSectionMainOverlayH2>
              Workhub office Webflow Webflow Design
            </ProjectsArticleSectionMainOverlayH2>
            <ProjectsArticleSectionMainOverlayP>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam.
            </ProjectsArticleSectionMainOverlayP>
            <ArrowBtn
              text="View more"
              color="#FCD980"
            />
          </ProjectsArticleSectionMainOverlay>
        </ProjectsArticleSectionMain>
        <ProjectsArticleSectionProjectsDiv>
          <ProjectsArticleSectionProjectsDivDiv>
            <ProjectsArticleSectionProjectsDivDivImg
              src="./Card.png"
              alt="project card mini 1"
            />
            <ProjectsArticleSectionProjectsDivDivOverlay>
              <ProjectsArticleSectionMainOverlayH2>
                Workhub office Webflow Webflow Design
              </ProjectsArticleSectionMainOverlayH2>
              <ArrowBtn
                text="View portfolio"
                color="#FCD980"
              />
            </ProjectsArticleSectionProjectsDivDivOverlay>
          </ProjectsArticleSectionProjectsDivDiv>
          <ProjectsArticleSectionProjectsDivDiv>
            <ProjectsArticleSectionProjectsDivDivImg
              src="./projectCard1.png"
              alt="project card mini 2"
            />
            <ProjectsArticleSectionProjectsDivDivOverlay>
              <ProjectsArticleSectionMainOverlayH2>
                Unisaas Website Design
              </ProjectsArticleSectionMainOverlayH2>
              <ArrowBtn
                text="View portfolio"
                color="#FCD980"
              />
            </ProjectsArticleSectionProjectsDivDivOverlay>
          </ProjectsArticleSectionProjectsDivDiv>
          <ProjectsArticleSectionProjectsDivImg
            src="./projectCard2.png"
            alt="project card mini 3"
          />
        </ProjectsArticleSectionProjectsDiv>
      </ProjectsArticleSection>
    </ProjectsArticle>
  );
};

export default Projects;

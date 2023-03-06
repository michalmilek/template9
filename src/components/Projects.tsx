import React from "react";
import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

const ProjectsArticle = styled.article`
  padding: 40px 10rem 60px;
  font-family: "Poppins";
`;

const ProjectsArticleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
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

const ProjectsArticleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectsArticleSection_Main = styled.div`
  position: relative;
  max-height: 600px;
  max-width: 845px;
`;

const ProjectsArticleSection_MainImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

const ProjectsArticleSection_MainOverlay = styled.div`
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
`;

const ProjectsArticleSection_MainOverlay_h2 = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* or 150% */

  /* White */

  color: #ffffff;
`;

const ProjectsArticleSection_MainOverlay_p = styled.p`
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
`;

const ProjectsArticleSection_MainOverlay_btn = styled.button`
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
`;

const CustomArrowRightGold = styled(ArrowRight)`
  height: 20px;
  width: 20px;
  color: #fcd980;
`;

const ProjectsArticleSection_ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  gap: 16px;
`;

const ProjectsArticleSection_ProjectsDiv_Div = styled.div`
  max-width: 405px;
  max-height: 284px;
  position: relative;
`;

const ProjectsArticleSection_ProjectsDiv_DivImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const ProjectsArticleSection_ProjectsDiv_DivOverlay = styled.div`
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

const ProjectsArticleSection_ProjectsDiv_Img = styled.img`
  max-width: 405px;
  max-height: 284px;
  object-fit: fill;
`;

const Projects = () => {
  return (
    <ProjectsArticle>
      <ProjectsArticleHeader>
        <ProjectsArticleHeader_H1>View our Projects</ProjectsArticleHeader_H1>
        <ViewMoreBtn>
          View more <CustomArrowRight />
        </ViewMoreBtn>
      </ProjectsArticleHeader>
      <ProjectsArticleSection>
        <ProjectsArticleSection_Main>
          <ProjectsArticleSection_MainImg
            src="./Card.png"
            alt="Card logo"
          />
          <ProjectsArticleSection_MainOverlay>
            <ProjectsArticleSection_MainOverlay_h2>
              Workhub office Webflow Webflow Design
            </ProjectsArticleSection_MainOverlay_h2>
            <ProjectsArticleSection_MainOverlay_p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam.
            </ProjectsArticleSection_MainOverlay_p>
            <ProjectsArticleSection_MainOverlay_btn>
              View more <CustomArrowRightGold />
            </ProjectsArticleSection_MainOverlay_btn>
          </ProjectsArticleSection_MainOverlay>
        </ProjectsArticleSection_Main>
        <ProjectsArticleSection_ProjectsDiv>
          <ProjectsArticleSection_ProjectsDiv_Div>
            <ProjectsArticleSection_ProjectsDiv_DivImg
              src="./projectCard1.png"
              alt="project card mini 1"
            />
            <ProjectsArticleSection_ProjectsDiv_DivOverlay>
              <ProjectsArticleSection_MainOverlay_h2>
                Unisaas Website Design
              </ProjectsArticleSection_MainOverlay_h2>
              <ProjectsArticleSection_MainOverlay_btn>
                View portfolio <CustomArrowRightGold />
              </ProjectsArticleSection_MainOverlay_btn>
            </ProjectsArticleSection_ProjectsDiv_DivOverlay>
          </ProjectsArticleSection_ProjectsDiv_Div>
          <ProjectsArticleSection_ProjectsDiv_Img
            src="./projectCard2.png"
            alt="project card mini 1"
          />
        </ProjectsArticleSection_ProjectsDiv>
      </ProjectsArticleSection>
    </ProjectsArticle>
  );
};

export default Projects;

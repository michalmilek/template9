import React from "react";
import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

const ViewMoreBtn = styled.button`
  font-family: "Poppins";
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  background: transparent;
  border: none;
  color: #282938;
`;

const CustomArrowRight = styled(ArrowRight)`
  height: 20px;
  width: 20px;
  color: #282938;
`;

const Projects = () => {
  return (
    <article>
      <section>
        <div>
          <h1>View our Projects</h1>
          <ViewMoreBtn>
            View more <CustomArrowRight />
          </ViewMoreBtn>
        </div>
      </section>
    </article>
  );
};

export default Projects;

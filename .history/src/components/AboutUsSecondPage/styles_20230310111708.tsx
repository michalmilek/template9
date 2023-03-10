import styled from "styled-components";

export const AboutUsSecondPageArticle1 = styled.article`
  padding: 46px 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

export const AboutUsSecondPageArticle1Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AboutUsSecondPageArticle1DivSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const AboutUsSecondPageArticle1DivTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["5xl"]};
  line-height: 32px;
`;

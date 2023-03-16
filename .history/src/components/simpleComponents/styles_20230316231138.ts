import React from "react";
import styled from "styled-components";

interface Error extends ThemeInterface {
  error?: string;
}

export const ErrorMessage = styled.p<Error>`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: red;
  text-align: center;
`;

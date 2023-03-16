import styled from "styled-components";

/* interface Error extends ThemeInterface {
    errorMessage?: string;
}

interface Error extends HTMLParagraphElement {
  error?: string;
} */

export const ErrorMessage = styled.p<any>`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: red;
  text-align: center;
`;

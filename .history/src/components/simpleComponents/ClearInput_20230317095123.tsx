import styled from "styled-components";
import { forwardRef } from "react";
import { ErrorMessage } from "./styles";

interface InputInterface1 extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
}

const Input = styled.input`
  all: inherit;
`;

const ClearInput = forwardRef<HTMLInputElement, InputInterface1>(
  (props: InputInterface1, ref) => {
    const { error, ...rest } = props;

    return (
      <>
        <Input
          {...rest}
          ref={ref}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }
);

export default ClearInput;

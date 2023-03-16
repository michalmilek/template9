import styled from "styled-components";
import { forwardRef } from "react";

interface InputInterface1 extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = styled.input`
  all: inherit;
`;

const ClearInput = forwardRef((props: InputInterface1, ref) => {
  const { ...rest } = props;
  return (
    <Input
      {...rest}
      ref={ref}
    />
  );
});

export default ClearInput;

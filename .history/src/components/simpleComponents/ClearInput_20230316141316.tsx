import styled from "styled-components";
import { forwardRef } from "react";

const Input = styled.input`
  color: #000;
`;

const ClearInput = forwardRef<HTMLInputElement, any>((ref: any, props: any) => {
  const { ...rest } = props;
  return (
    <Input
      ref={ref}
      {...rest}
    />
  );
});

export default ClearInput;

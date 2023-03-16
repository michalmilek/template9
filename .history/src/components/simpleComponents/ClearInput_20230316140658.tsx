import styled from "styled-components";
import { forwardRef } from "react";

const Input = styled.input`
  all: inherit;
`;

const ClearInput = (ref: any, props: any) => {
  return (
    <Input
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ClearInput);

import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  all: inherit;
`;

const ClearInput = (ref: any, { ...props }: InputInterface) => {
  return (
    <Input
      ref={ref}
      {...props}
    />
  );
};

export default React.forwardRef(ClearInput);

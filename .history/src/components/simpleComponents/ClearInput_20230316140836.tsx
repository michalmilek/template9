import styled from "styled-components";
import { forwardRef } from "react";

const Input = styled.input`
  all: inherit;
`;

const ClearInput = (ref: any, props: any) => {
  const { ...rest } = props;
  return (
    <Input
      ref={ref}
      {...rest}
    />
  );
};

export default forwardRef(ClearInput);

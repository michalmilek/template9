import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  all: inherit;
`;

const ClearInput = ({ ...props }: InputInterface) => {
  return <Input {...props} />;
};

export default ClearInput;

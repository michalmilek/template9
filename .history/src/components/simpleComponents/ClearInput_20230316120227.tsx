import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  all: inherit;
`;

const ClearInput = ({ ...props }: InputInterface) => {
  const [value, setValue] = useState("");
  return (
    <Input
      /* value={value}
      onChange={(e) => setValue(e.target.value)} */
      {...props}
    />
  );
};

export default ClearInput;

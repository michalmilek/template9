import React, { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";

/* interface ClearButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  field?: any;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const Input = styled.input`
  all: inherit;
`;

const ClearInput = ({ ...props }: any) => {
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

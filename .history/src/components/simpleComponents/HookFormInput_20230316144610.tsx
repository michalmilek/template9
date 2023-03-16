import { forwardRef } from "react";
import styled from "styled-components";
import ClearInput from "./ClearInput";

const Label = styled.form`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
`;

const HookFormInput = forwardRef(
  ({ error, label, ...props }: InputInterface) => {
    return (
      <Label>
        {label}
        <ClearInput {...props} />
        {error && <p>{error}</p>}
      </Label>
    );
  }
);

export default HookFormInput;

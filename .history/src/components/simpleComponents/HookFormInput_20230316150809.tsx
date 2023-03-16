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
  width: 100%;
  text-align: left;
`;

const HookFormInput = forwardRef<HTMLInputElement, InputInterface>(
  (props: InputInterface, ref) => {
    const { error, label, ...rest } = props;
    return (
      <Label>
        {label}
        <ClearInput
          ref={ref}
          {...rest}
        />
        {error && <p>{error}</p>}
      </Label>
    );
  }
);

export default HookFormInput;

import { fields } from "components/ContactUsForm";
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

const StyledInput = styled(ClearInput)`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 5px 10px;
  background: transparent;
  border-radius: 8px;
  opacity: 1;
`;

const HookFormInput = forwardRef<HTMLInputElement, InputInterface>(
  (props: InputInterface, ref) => {
    const { error, label, ...rest } = props;
    return (
      <Label>
        {label}
        <StyledInput
          ref={ref}
          {...rest}
        />
        {error && <p>{error}</p>}
      </Label>
    );
  }
);

export default HookFormInput;

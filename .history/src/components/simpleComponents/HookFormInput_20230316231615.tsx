import { fields } from "components/ContactUsForm";
import { forwardRef } from "react";
import styled from "styled-components";
import ClearInput from "./ClearInput";
import { ErrorMessage } from "./styles";

const Label = styled.form`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  width: 100%;
  text-align: left;
  font-weight: 500;
`;

const StyledInput = styled(ClearInput)`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 15px 20px;
  background: transparent;
  border-radius: 8px;
  font-weight: 400;

  ::placeholder {
    opacity: 1;
    color: ${({ theme }) => theme.colors.black};
  }
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Label>
    );
  }
);

export default HookFormInput;

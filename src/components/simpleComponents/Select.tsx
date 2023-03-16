import React, { forwardRef } from "react";
import styled from "styled-components";
import { ErrorMessage } from "./styles";

interface SelectInterface1
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  error?: string;
  options: string[];
}

const Label = styled.label`
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

const SelectStyled = styled.select`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 18px 20px;
  background: transparent;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.ms};
  border-radius: 8px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Option = styled.option``;

const Select = forwardRef<HTMLSelectElement, SelectInterface1>(
  (props: SelectInterface1, ref) => {
    const { error, label, options, ...rest } = props;
    console.log(ref);
    return (
      <Label>
        {label}
        <SelectStyled
          {...rest}
          ref={ref}>
          <Option
            value=""
            disabled
            selected
            hidden>
            Select subject
          </Option>
          {options?.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </SelectStyled>
        <ErrorMessage>{error}</ErrorMessage>
      </Label>
    );
  }
);

export default Select;

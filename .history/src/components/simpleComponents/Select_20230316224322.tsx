import React, { forwardRef } from "react";
import styled from "styled-components";

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
`;

const SelectStyled = styled.select`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 5px 10px;
  background: transparent;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  font-size: 20px;

  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Select = forwardRef<HTMLSelectElement, SelectInterface1>(
  (props: SelectInterface1, ref) => {
    const { error, label, options, ...rest } = props;
    return (
      <Label>
        {label}
        <SelectStyled
          {...rest}
          ref={ref}>
          <option
            value=""
            disabled
            selected
            hidden>
            Select subject
          </option>
          {options?.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </SelectStyled>
        {error}
      </Label>
    );
  }
);

export default Select;

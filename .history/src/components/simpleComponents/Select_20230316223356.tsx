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
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

const SelectStyled = styled.select`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 5px 10px;
  background: transparent;
  border-radius: 8px;
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

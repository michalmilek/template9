import React, { forwardRef } from "react";
import styled from "styled-components";

interface SelectInterface1
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  error?: string;
  options: string[];
}

const SelectStyled = styled.select``;

const Select = forwardRef<HTMLSelectElement, SelectInterface1>(
  (props: SelectInterface1, ref) => {
    const { error, label, ...rest } = props;
    return (
      <label>
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
          <option>female</option>
          <option>male</option>
        </SelectStyled>
        {error}
      </label>
    );
  }
);

export default Select;

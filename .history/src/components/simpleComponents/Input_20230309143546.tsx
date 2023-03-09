import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const Input = (Props: any) => {
  const { name, component, ...rest } = Props;

  const FieldStyled = styled(Field)`
    width: 100%;
  `;

  return (
    <div>
      <FieldStyled
        name={name}
        {...rest}
      />
    </div>
  );
};

export default Input;

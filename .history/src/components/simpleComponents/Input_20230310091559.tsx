import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const Input = (Props: any) => {
  const { name, component, ...rest } = Props;

  const FieldStyled = styled(Field)`
    width: 100%;
  `;

  const FieldDiv = styled.div`
    width: 100%;
  `;

  return (
    <FieldDiv>
      <FieldStyled
        name={name}
        {...rest}
      />
    </FieldDiv>
  );
};

export default Input;

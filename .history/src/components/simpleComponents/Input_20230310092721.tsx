import React from "react";
import { ErrorMessage, Field } from "formik";
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
      <ErrorMessage name={name} />
    </FieldDiv>
  );
};

export default Input;

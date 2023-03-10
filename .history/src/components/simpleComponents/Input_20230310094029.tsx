import React from "react";
import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

const Input = (Props: any) => {
  const { name, component, control, ...rest } = Props;

  const FieldStyled = styled(Field)`
    width: 100%;
  `;

  const FieldDiv = styled.div`
    width: 100%;
  `;

  return (
    <div>
      <FieldStyled
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default Input;

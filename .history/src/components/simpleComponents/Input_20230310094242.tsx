import React from "react";
import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

const Input = (Props: any) => {
  const { name, component, control, ...rest } = Props;

  const FieldStyled = styled(Field)`
    width: 100%;
    color: #fff;
  `;

  const FieldDiv = styled.div`
    width: 100%;
  `;

  const ErrorStyled = styled(ErrorMessage)`
    text-align: center;
    color: ${({ theme }) => theme.colors.bgPrimary1};
    background: #fff;
  `;

  return (
    <FieldDiv>
      <FieldStyled
        name={name}
        {...rest}
      />
      <ErrorStyled name={name} />
    </FieldDiv>
  );
};

export default Input;

import React from "react";
import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

const Input = (Props: any) => {
  const { name, component, control, ...rest } = Props;

  const FieldDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${({ theme }) => theme.colors.bgPrimary1};
    align-items: center;
    justify-content: center;
  `;
  const FieldStyled = styled(Field)`
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
  `;

  const ErrorStyled = styled(ErrorMessage)`
    text-align: center;
    color: ${({ theme }) => theme.colors.bgPrimary1};
    background: #fff;
  `;

  return (
    <FieldDiv>
      <FieldStyleds
        name={name}
        {...rest}
      />
      <ErrorStyled name={name} />
    </FieldDiv>
  );
};

export default Input;

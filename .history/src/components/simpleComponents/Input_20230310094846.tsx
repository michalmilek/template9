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
    border: 2px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    background: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    padding: 10px 0 10px 8%;
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

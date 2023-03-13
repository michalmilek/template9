import React from "react";
import { useField } from "formik";
import styled from "styled-components";

export interface InputInterface {
  type: "name" | "url" | "email";
  placeholder: string;
  name: "name" | "url" | "email";
}

const FieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.bgPrimary1};
  align-items: center;
  justify-content: center;
`;
const FieldStyled = styled.input`
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
  color: ${({ theme }) => theme.colors.bgPrimary2};

  opacity: 0.5;
`;

const MyTextField = ({ type, placeholder, ...props }: InputInterface) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FieldStyled
        type={type}
        {...field}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </>
  );
};

const Input = (Props: InputInterface) => {
  const [field, meta] = useField(Props);

  return (
    <FieldDiv>
      <MyTextField
        {...field}
        {...meta}
        {...Props}
      />
      {/* <ErrorStyled name={name} /> */}
    </FieldDiv>
  );
};

export default Input;

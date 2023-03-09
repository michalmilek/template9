import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

const Input = (Props: any) => {
  const { name, component, ...rest } = Props;

  return (
    <div>
      <Field
        name={name}
        {...rest}
      />
    </div>
  );
};

export default Input;

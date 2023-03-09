import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = (Props: any) => {
  const { name, component, ...rest } = Props;

  const InputArticleFormError = styled(ErrorMessage)`
    color: #fff;
    text-align: center;
  `;

  return (
    <div>
      <Field
        name={name}
        {...rest}
      />
      <InputArticleFormError name="name" />
    </div>
  );
};

export default Input;

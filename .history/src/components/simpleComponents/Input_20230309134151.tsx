import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = (Props: any) => {
  const { name, ...rest } = Props;
  return (
    <div>
      <Field
        name={name}
        {...rest}
      />
      <ErrorMessage name="name" />
    </div>
  );
};

export default Input;

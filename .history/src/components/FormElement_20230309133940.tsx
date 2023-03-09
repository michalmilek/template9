import React from "react";
import { Field, ErrorMessage } from "formik";

const FormElement = (Props: any) => {
  const { name, ...rest } = props;
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

export default FormElement;

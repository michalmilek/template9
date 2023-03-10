import React from "react";
import Input from "./Input";

const FormikController = (props: any) => {
  const { control, component, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormikController;

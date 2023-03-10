import React from "react";
import Input from "./Input";

const FormikController = (props: any) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormikController;

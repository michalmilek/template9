import React from "react";
import Input from "./Input";


export interface FormikControllerInterface {
  control: "input";
  type: "name" | "url" | "email";
  placeholder: string;
  name: "name" | "url" | "email";
}

const FormikController = (props: FormikControllerInterface) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormikController;

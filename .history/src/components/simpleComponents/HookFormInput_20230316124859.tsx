import { FormData } from "components/ContactUsForm";
import React from "react";
import ClearInput from "./ClearInput";
import { UseControllerProps, useController } from "react-hook-form";

/* interface HookFormInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const HookFormInput = (props: UseControllerProps<FormData>) => {
  const { field, fieldState } = useController(props);

  return;
  <ClearInput
    {...field}
    {...props}
  />;
};

export default HookFormInput;

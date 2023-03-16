import { FormData } from "components/ContactUsForm";
import React from "react";
import ClearInput from "./ClearInput";

/* interface HookFormInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const HookFormInput = ({ ...props }: InputInterface) => {
  return;
  <ClearInput {...props} />;
};

export default HookFormInput;

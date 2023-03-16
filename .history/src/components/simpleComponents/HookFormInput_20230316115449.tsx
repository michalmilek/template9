import React from "react";
import ClearInput from "./ClearInput";

/* interface HookFormInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const HookFormInput = ({ register, ...props }: InputInterface) => {
  return (
    <div>
      <ClearInput {...props} />
    </div>
  );
};

export default HookFormInput;

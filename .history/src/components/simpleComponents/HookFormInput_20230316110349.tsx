import React from "react";
import ClearInput from "./ClearInput";

/* interface HookFormInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const HookFormInput = ({ errors, ...props }: any) => {
  return (
    <div>
      <ClearInput {...props} />
      <p>{errors?.email?.message}</p>
    </div>
  );
};

export default HookFormInput;

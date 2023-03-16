import React from "react";
import ClearInput from "./ClearInput";

/* interface HookFormInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const HookFormInput = ({ placeholder, ...props }: any) => {
  return (
    <div>
      <ClearInput />
    </div>
  );
};

export default HookFormInput;

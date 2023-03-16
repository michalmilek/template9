import React, { useRef } from "react";
import ClearInput from "./ClearInput";

/* interface HookFormInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const HookFormInput = ({ errors, ...props }: InputInterface) => {
  console.log(props);
  console.log(errors);

  return (
    <div>
      <ClearInput {...props} />
    </div>
  );
};

export default HookFormInput;

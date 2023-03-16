import React, { useRef } from "react";
import ClearInput from "./ClearInput";

/* interface HookFormInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const HookFormInput = ({ register, ...props }: InputInterface) => {
  const reference = useRef(register);

  return (
    <div>
      <ClearInput {...props} />
    </div>
  );
};

export default HookFormInput;

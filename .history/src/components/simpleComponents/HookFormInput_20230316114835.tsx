import React from "react";
import ClearInput from "./ClearInput";

/* interface HookFormInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const HookFormInput = ({ errors, register, ...props }: InputInterface) => {
  console.log(errors);
  return (
    <div>
      <ClearInput
        ref={register}
        {...props}
      />
      <p>{errors?.email?.message}</p>
    </div>
  );
};

export default HookFormInput;

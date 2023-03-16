import React from "react";
import { useController } from "react-hook-form";
import ClearInput from "./ClearInput";

const HookFormInput = (props: any) => {
  const { field, fieldState } = useController(props);
  const { ...rest } = props;
  return (
    <div>
      <ClearInput
        {...field}
        {...rest}
      />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
};

export default HookFormInput;

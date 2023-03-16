import React from "react";
import ClearInput from "./ClearInput";

const HookFormInput = ({ errors, ...props }: InputInterface) => {
  return (
    <div>
      <ClearInput {...props} />;<p>{errors.subject?.message}</p>
    </div>
  );
};

export default HookFormInput;

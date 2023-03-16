import React from "react";
import ClearInput from "./ClearInput";

const HookFormInput = ({ ...props }: InputInterface) => {
  return (
    <div>
      <ClearInput {...props} />
    </div>
  );
};

export default HookFormInput;

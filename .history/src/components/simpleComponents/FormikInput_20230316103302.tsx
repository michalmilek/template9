import React from "react";
import ClearInput from "./ClearInput";

const FormikInput = ({ ...props }: any) => {
  return (
    <div>
      <ClearInput {...props} />
    </div>
  );
};

export default FormikInput;

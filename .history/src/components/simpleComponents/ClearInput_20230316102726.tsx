import React, { ButtonHTMLAttributes, useState } from "react";

/* interface ClearButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  field?: any;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<any>;
} */

const ClearInput = ({ ...props }: any) => {
  const [value, setValue] = useState("");
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

export default ClearInput;

import { forwardRef } from "react";
import ClearInput from "./ClearInput";

const HookFormInput = forwardRef(
  ({ error, label, ...props }: InputInterface) => {
    return (
      <label>
        {label}
        <ClearInput {...props} />
        {error && <p>{error}</p>}
      </label>
    );
  }
);

export default HookFormInput;

import { forwardRef } from "react";
import ClearInput from "./ClearInput";

const HookFormInput = forwardRef(({ ...props }: InputInterface) => {
  return <ClearInput {...props} />;
});

export default HookFormInput;

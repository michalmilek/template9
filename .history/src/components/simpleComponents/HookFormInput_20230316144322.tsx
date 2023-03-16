import { forwardRef } from "react";
import ClearInput from "./ClearInput";

const HookFormInput = forwardRef(({ error, ...props }: InputInterface) => {
  return (
    <div>
      <ClearInput {...props} />
      {error && <p>{error}</p>}
    </div>
  );
});

export default HookFormInput;

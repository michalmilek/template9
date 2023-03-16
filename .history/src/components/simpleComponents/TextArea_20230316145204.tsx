import styled from "styled-components";
import { forwardRef } from "react";

interface InputInterface1
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const Textarea = styled.textarea`
  all: inherit;
`;

const ClearInput = forwardRef<HTMLTextAreaElement, InputInterface1>(
  (props: InputInterface1, ref) => {
    const { ...rest } = props;
    return (
      <Textarea
        {...rest}
        ref={ref}
      />
    );
  }
);

export default ClearInput;

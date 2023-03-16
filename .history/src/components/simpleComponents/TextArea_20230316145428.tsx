import styled from "styled-components";
import { forwardRef } from "react";

interface TextAreaInterface1
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: string;
}

const Textarea = styled.textarea`
  all: inherit;
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaInterface1>(
  (props: TextAreaInterface1, ref) => {
    const { error, label, ...rest } = props;
    return (
      <label>
        {label}
        <Textarea
          {...rest}
          ref={ref}
        />
        {error}
      </label>
    );
  }
);

export default TextArea;

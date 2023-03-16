import styled from "styled-components";
import { forwardRef } from "react";

interface TextAreaInterface1
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: string;
}

const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  width: 100%;
  text-align: left;
  grid-column: span 2;
  font-weight: 600;
`;

const Textarea = styled.textarea`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px 10px;
  background: transparent;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaInterface1>(
  (props: TextAreaInterface1, ref) => {
    const { error, label, ...rest } = props;
    return (
      <Label>
        {label}
        <Textarea
          {...rest}
          ref={ref}
        />
        {error}
      </Label>
    );
  }
);

export default TextArea;

import styled from "styled-components";
import { forwardRef } from "react";
import { ErrorMessage } from "./styles";
import { FieldMetaProps } from "formik";

interface InputInterface1 extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  meta?: FieldMetaProps<any>;
}

const Input = styled.input`
  all: inherit;
`;

const ClearInput = forwardRef<HTMLInputElement, InputInterface1>(
  (props: InputInterface1, ref) => {
    const { error, meta, ...rest } = props;
    return (
      <>
        <Input
          {...rest}
          ref={ref}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {meta && meta.touched && meta?.error ? (
          <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null}
      </>
    );
  }
);

export default ClearInput;

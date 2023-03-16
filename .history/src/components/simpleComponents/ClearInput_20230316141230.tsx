import styled from "styled-components";

const Input = styled.input`
  color: #000;
`;

const ClearInput = React.forwardRef<HTMLInputElement, any>(
  (ref: any, props: any) => {
    const { ...rest } = props;
    return (
      <Input
        ref={ref}
        {...rest}
      />
    );
  }
);

export default ClearInput;

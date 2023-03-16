import styled from "styled-components";

interface InputInterface1 extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = styled.input`
  all: inherit;
`;

const ClearInput = ({ ...props }: InputInterface1) => {
  return <Input {...props} />;
};

export default ClearInput;

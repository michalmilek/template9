import styled from "styled-components";

const Input = styled.input`
  all: inherit;
`;

const ClearInput = ({ ...props }) => {
  return <Input {...props} />;
};

export default ClearInput;

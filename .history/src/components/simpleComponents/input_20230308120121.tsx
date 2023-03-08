import React from "react";
import styled from "styled-components";

type Props = {
    type: string;
    onChange:
    onBlur:
    value: 
}

const input = () => {
  return (
    <input
      id={type}
      name={type}
      type={type}
      placeholder="Paste your Figma design URL"
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
  );
};

export default input;

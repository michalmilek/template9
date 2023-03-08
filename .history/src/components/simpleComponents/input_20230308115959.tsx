import React from "react";
import styled from "styled-components";

const input = () => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder="Paste your Figma design URL"
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
  );
};

export default input;

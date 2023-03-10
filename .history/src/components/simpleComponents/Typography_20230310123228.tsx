import React from "react";
import styled from "styled-components";
import { H1 } from "styled-icons/remix-editor";

const Typography = (props: TextInterface) => {
  const { type, text, ...rest } = props;

  switch (type) {
    case "h1":
      return <H1 {...rest}>{text}</H1>;
    case "h2":
      return <h2 {...rest}>{text}</h2>;
    case "h3":
      return <h3 {...rest}>{text}</h3>;
    case "h4":
      return <h4 {...rest}>{text}</h4>;
    case "h5":
      return <h5 {...rest}>{text}</h5>;
    case "h6":
      return <h6 {...rest}>{text}</h6>;
    case "p":
      return <p {...rest}>{text}</p>;
    case "span":
      return <span {...rest}>{text}</span>;
    default:
      return null;
  }
};

export default Typography;

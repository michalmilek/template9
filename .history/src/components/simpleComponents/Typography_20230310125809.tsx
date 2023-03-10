import React from "react";
import H1Text from "./TypographyTexts/H1Text";
import H2Text from "./TypographyTexts/H2Text";
import H3Text from "./TypographyTexts/H3Text";
import H4Text from "./TypographyTexts/H4Text";
import H5Text from "./TypographyTexts/H5Text";
import H6Text from "./TypographyTexts/H6Text";
import PText from "./TypographyTexts/PText";
import SpanText from "./TypographyTexts/SpanText";

const Typography = (props: TextInterface) => {
  const { type, ...rest } = props;

  switch (type) {
    case "h1":
      return (
        <H1Text
          type={type}
          {...rest}
        />
      );
    case "h2":
      return (
        <H2Text
          type={type}
          {...rest}
        />
      );
    case "h3":
      return (
        <H3Text
          type={type}
          {...rest}
        />
      );
    case "h4":
      return (
        <H4Text
          type={type}
          {...rest}
        />
      );
    case "h5":
      return (
        <H5Text
          type={type}
          {...rest}
        />
      );
    case "h6":
      return (
        <H6Text
          type={type}
          {...rest}
        />
      );
    case "p":
      return (
        <PText
          type={type}
          {...rest}
        />
      );
    case "span":
      return (
        <SpanText
          type={type}
          {...rest}
        />
      );
    default:
      return null;
  }
};

export default Typography;

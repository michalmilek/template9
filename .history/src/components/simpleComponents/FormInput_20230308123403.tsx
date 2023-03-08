import React from "react";
import styled from "styled-components";

type Props = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: /* {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  }; */ any;
  onBlur: /* {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  }; */ any;
};

const Input = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
}: Props) => {
  const InquiryArticleInput = styled.input`
    border: 2px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    background: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    padding: 10px 0 10px 8%;
    width: 100%;
    /* identical to box height, or 175% */

    /* Grey */

    color: #f4f6fc;

    opacity: 0.5;

    :focus {
      outline: none;
    }
  `;

  return (
    <InquiryArticleInput
      id={type}
      name={type}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;

import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import ArrowIcon from "icons/ArrowIcon";

type Values = {
  name: string;
  email: string;
  url: string;
};

const InquiryArticle = styled.article`
  padding: 60px 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  gap: 0;
  margin: 20px 0 60px;
`;
const InquiryArticleSection = styled.section`
  position: relative;
  width: 50%;
  background: url("./FormBackground.png");
  mix-blend-mode: multiply;
  background-size: cover;
  min-height: 600px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  :before {
    background-color: rgba(28, 30, 83, 0.5);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;
const InquiryArticleSectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
  padding: 0 18% 20px;
`;
const InquiryArticleSectionH1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  /* or 137% */

  /* White */

  color: #ffffff;
  z-index: 1;
`;
const InquiryArticleSectionP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  color: #ffffff;
  z-index: 1;
`;
const InquiryArticleForm = styled.form`
  padding: 0 10%;
  background: #1c1e53;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  width: 50%;
  gap: 30px;
`;
const InquiryArticleH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height, or 150% */

  color: #ffffff;
`;
const InquiryArticleP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  /* Grey */

  color: #f4f6fc;
`;

const InquiryArticleInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
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
const InquiryArticleFormBtn = styled.button`
  background: #fcd980;
  border-radius: 41px;
  width: 100%;
  padding: 20px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */

  /* DARK */

  color: #1b1c2b;
  cursor: pointer;
`;

const InquiryArticleFormA = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */

  /* White */

  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

const validate = (values: any) => {
  const errors = {
    name: "",
    email: "",
    url: "",
  };
  if (!values?.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.url) {
    errors.url = "Required";
  } else if (!values.email.includes("http")) {
    errors.url = "Please paste correct URL";
  }

  return errors;
};

const InquiryForm = () => {
  const formik = useFormik<Values>({
    initialValues: { name: "", email: "", url: "" },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <InquiryArticle>
      <InquiryArticleSection>
        <InquiryArticleSectionText>
          <InquiryArticleSectionH1>
            Building stellar websites for early startups
          </InquiryArticleSectionH1>
          <InquiryArticleSectionP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </InquiryArticleSectionP>
        </InquiryArticleSectionText>
      </InquiryArticleSection>
      <InquiryArticleForm onSubmit={formik.handleSubmit}>
        <InquiryArticleH2>Send inquiry</InquiryArticleH2>
        <InquiryArticleP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </InquiryArticleP>
        <InquiryArticleInputContainer>
          <InquiryArticleInput
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          <InquiryArticleInput
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <InquiryArticleInput
            id="url"
            name="url"
            type="url"
            placeholder="Paste your Figma design URL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
          />
          {formik.touched.url && formik.errors.url ? (
            <div>{formik.errors.url}</div>
          ) : null}
        </InquiryArticleInputContainer>
        <InquiryArticleFormBtn type="submit">
          Send an Inquiry
        </InquiryArticleFormBtn>
        <InquiryArticleFormA>
          Get in touch with us <ArrowIcon />
        </InquiryArticleFormA>
      </InquiryArticleForm>
    </InquiryArticle>
  );
};

export default InquiryForm;

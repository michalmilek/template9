import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import ArrowBtn from "./simpleComponents/ArrowBtn";
import Input from "./simpleComponents/Input";
import Button from "./simpleComponents/Button";

type Values = {
  name: string;
  email: string;
  url: string;
};

const InquiryArticle = styled.article`
  padding: 60px 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  gap: 0;
  margin: 20px 0 80px;
  @media (max-width: 1100px) {
    width: auto;
    padding: 60px 0;
    margin: 0;
    min-height: auto;
    flex-direction: column;
  }
`;
const InquiryArticleSection = styled.section`
  position: relative;
  width: 50%;
  background: url("./images/FormBackground.png");
  mix-blend-mode: multiply;
  background-size: cover;
  min-height: 800px;
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

  @media (max-width: 1100px) {
    width: 100%;
    min-height: 300px;
    padding: 60px 0;
    margin: 0;
    min-height: none;
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
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  /* or 137% */

  /* White */

  color: #ffffff;
  z-index: 1;

  @media (max-width: 1100px) {
    display: none;
  }
`;
const InquiryArticleSectionP = styled.p`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  color: #ffffff;
  z-index: 1;

  @media (max-width: 1100px) {
    display: none;
  }
`;
const InquiryArticleForm = styled(Form)`
  padding: 0 10%;
  background: #1c1e53;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 800px;
  width: 50%;
  gap: 30px;
  flex: 1;

  @media (max-width: 1100px) {
    min-height: auto;
    padding: 50px 10%;
    width: 100%;
    flex: 3;
  }
`;
const InquiryArticleH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height, or 150% */

  color: #ffffff;
  @media (max-width: 1100px) {
    align-self: start;
  }
`;
const InquiryArticleP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  /* Grey */

  color: #f4f6fc;

  @media (max-width: 1100px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* or 200% */

    color: #ffffff;

    opacity: 0.7;

    /* Inside auto layout */
  }
`;

const InquiryArticleInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  padding: 0;
  align-items: center;
  justify-content: center;
`;
const InquiryButton = styled(Button)`
  width: 100%;
`;

const InquiryForm = () => {
  const initialValues: Values = { name: "", email: "", url: "" };
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    url: Yup.string().url("Invalid url").required("Required"),
  });
  const onSubmit = (values: Values) => console.log("Form data", values);

  /* const formik = useFormik<Values>({
    initialValues: { name: "", email: "", url: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      url: Yup.string().url("Invalid url").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  }); */
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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => (
          <InquiryArticleForm>
            <InquiryArticleH2>Send inquiry</InquiryArticleH2>
            <InquiryArticleP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </InquiryArticleP>
            <InquiryArticleInputContainer>
              <Input
                type="name"
                placeholder="Name"
                name="name"
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
              />
              <Input
                type="url"
                placeholder="Paste here Figma URL"
                name="url"
              />
            </InquiryArticleInputContainer>
            <InquiryButton
              text="Send an Inquiry"
              variant="primary"
              type="submit"
            />
            <ArrowBtn
              text="Get in touch with us"
              isArrow
              color="bgPrimary1"
            />
            {/*  <InquiryArticleFormA>
          Get in touch with us <ArrowIcon />
        </InquiryArticleFormA> */}
          </InquiryArticleForm>
        )}
      </Formik>
    </InquiryArticle>
  );
};

export default InquiryForm;

import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

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
      <section>
        <h1>Building stellar websites for early startups</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
        </p>
      </section>
      <form onSubmit={formik.handleSubmit}>
        <input
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
        <input
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
        <input
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
        <button type="submit">Send an Inquiry</button>
      </form>
    </InquiryArticle>
  );
};

export default InquiryForm;

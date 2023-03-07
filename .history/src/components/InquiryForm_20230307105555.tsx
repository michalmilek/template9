import React from "react";
import { useFormik } from "formik";

type Values = {
  name: string | null;
  email: string;
  url: string;
};

const validate = (values: null | string) => {
  const errors = {
    name: null,
    email: null,
    url: null,
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
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <input
        id="url"
        name="url"
        type="url"
        placeholder="Paste your Figma design URL"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.url}
      />
      {formik.errors.url ? <div>{formik.errors.url}</div> : null}
      <button type="submit">Send an Inquiry</button>
    </form>
  );
};

export default InquiryForm;

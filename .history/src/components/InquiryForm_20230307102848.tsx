import React from "react";
import { useFormik } from "formik";

type Values = {
  name: string;
  email: string;
  url: string;
};

const InquiryForm = () => {
  const formik = useFormik<Values>({
    initialValues: { name: "", email: "", url: "" },
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
        value={formik.values.name}
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="url"
        name="url"
        type="url"
        placeholder="Paste your Figma design URL"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Send an Inquiry</button>
    </form>
  );
};

export default InquiryForm;

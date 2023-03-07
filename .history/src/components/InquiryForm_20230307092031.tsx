import React from "react";
import { useFormik, Formik } from "formik";

type Values = {
  name: string;
  email: string;
  url: string;
};

const InquiryForm = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", url: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InquiryForm;

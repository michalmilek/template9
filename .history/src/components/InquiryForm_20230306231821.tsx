import React from "react";
import { useFormik, Formik } from "formik";

type Values = {
  name: string;
  email: string;
  url: string;
};

const InquiryForm = () => {
  const formik = useFormik({
    initialValues = {
      name: "",
      email: "",
      url: "",
    },
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        url: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      <input
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="Your name"
      />
      <input
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        type="url"
        value={formik.values.url}
        onChange={formik.handleChange}
      />
    </Formik>
  );
};

export default InquiryForm;

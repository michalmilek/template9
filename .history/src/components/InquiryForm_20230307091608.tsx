import React from "react";
import { useFormik, Formik } from "formik";

type Values = {
  name: string;
  email: string;
  url: string;
};

const InquiryForm = () => {

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
        value={Formik.values.name}
        onChange={Formik.handleChange}
        placeholder="Your name"
      />
      <input
        type="email"
        value={Formik.values.email}
        onChange={Formik.handleChange}
      />
      <input
        type="url"
        value={Formik.values.url}
        onChange={Formik.handleChange}
      />
    </Formik>
  );
};

export default InquiryForm;

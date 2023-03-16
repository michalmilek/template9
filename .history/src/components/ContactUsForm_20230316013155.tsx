import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const messageRequired = "Por favor, preencha este campo";
const messagePositive = "Por favor, informe um valor positivo";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(messageRequired),
  age: yup.number().required(messageRequired).positive(messagePositive),
});

function ContactUsForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          ref={register}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          ref={register}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          name="age"
          ref={register({ valueAsNumber: true })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}

export default ContactUsForm;

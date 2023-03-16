import React from "react";
import "./styles.css";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  password: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
});

export default function App() {
  const { register, handleSubmit, errors } = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: { email: "", password: "" },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="column">
        <input
          name="email"
          type="email"
          inputRef={register}
          error={errors.email}
        />
        <input
          name="password"
          type="password"
          inputRef={register}
          error={errors.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const InputField = ({
  inputRef,
  name,
  variant = "outlined",
  label,
  type = "text",
  error,
  isFocus,
  fullWidth,
}) => {
  return (
    <TextField
      name={name}
      type={type}
      variant={variant}
      label={label}
      inputRef={inputRef}
      helperText={error?.message}
      error={!!error?.message}
      autoFocus={isFocus}
      fullWidth={fullWidth}
    />
  );
};

import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const validationSchema = yup.object().shape({
  password: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
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
        <InputField
          name="email"
          variant="outlined"
          label="Email"
          inputRef={register}
          error={errors.email}
          isFocus
          fullWidth
        />
        <InputField
          name="password"
          type="password"
          variant="outlined"
          label="Password"
          inputRef={register}
          error={errors.password}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth>
          Submit
        </Button>
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

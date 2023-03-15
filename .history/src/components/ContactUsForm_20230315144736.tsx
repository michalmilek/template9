import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  subjectSelect: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    age: yup.string().email().required(),
    subject: yup.string().required(),
    subjectSelect: yup.string().required().oneOf(["female", "male", "other"]),
    message: yup.string().required().min(5, "Must be more than 5 letters"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>
        Name:
        <input
          placeholder="Enter your name"
          defaultValue=""
          {...(register("name"), { required: true })}
        />
      </label>
      {errors.name && <span>This field is required</span>}
      <label>
        Email
        <input
          placeholder="Enter your email"
          type="email"
          defaultValue=""
          {...(register("email"), { required: true })}
        />
      </label>
      {errors.email && <span>This field is required</span>}

      <select {...register("subjectSelect")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default ContactUsForm;

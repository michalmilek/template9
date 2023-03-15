import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
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
    email: yup.string().email().required(),
    subject: yup.string().required(),
    subjectSelect: yup.string().required().oneOf(["female", "male", "other"]),
    message: yup.string().required().min(5, "Must be more than 5 letters"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Form = styled.form`
  background: ${({ theme }) => theme.colors.bgPrimary2};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>
        Name:
        <input
          placeholder="Enter your name"
          defaultValue=""
          {...(register("name"), { required: true })}
        />
      </label>
      <p>{errors.name?.message}</p>
      <label>
        Email
        <input
          placeholder="Enter your email"
          type="email"
          defaultValue=""
          {...(register("email"), { required: true })}
        />
      </label>
      <p>{errors.email?.message}</p>
      <label>
        Subject
        <input
          placeholder="Subject"
          type="email"
          defaultValue=""
          {...(register("subject"), { required: true })}
        />
      </label>
      <p>{errors.subject?.message}</p>
      <label>
        Subject
        <select {...register("subjectSelect")}>
          <option
            value=""
            disabled
            selected
            hidden>
            Select subject
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </label>
      <p>{errors.subjectSelect?.message}</p>

      <label>
        Message
        <textarea
          placeholder="Subject"
          defaultValue=""
          {...(register("message"), { required: true })}
        />
      </label>
      <p>{errors.message?.message}</p>

      <input type="submit" />
    </Form>
  );
}

export default ContactUsForm;

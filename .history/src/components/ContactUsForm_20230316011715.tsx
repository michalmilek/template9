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
    name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    subject: yup.string().required("Required"),
    subjectSelect: yup
      .string()
      .required("Required")
      .oneOf(["female", "male", "other"]),
    message: yup
      .string()
      .required("Required")
      .min(5, "Must be more than 5 letters"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.bgPrimary2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  width: 100%;
`;

const Label = styled.form`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
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
      <InputContainer>
        {/* register your input into the hook by invoking the "register" function */}
        <Label>
          Name:
          <input
            placeholder="Enter your name"
            defaultValue=""
            onBlur={onBlur}
            {...(register("name"), { required: true })}
          />
          <p>{errors.name?.message}</p>
        </Label>
        <Label>
          Email
          <input
            placeholder="Enter your email"
            type="email"
            defaultValue=""
            {...(register("email"), { required: true })}
          />
          <p>{errors.email?.message}</p>
        </Label>
        <Label>
          Subject
          <input
            placeholder="Subject"
            type="email"
            defaultValue=""
            {...(register("subject"), { required: true })}
          />
          <p>{errors.subject?.message}</p>
        </Label>
        <Label>
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
          <p>{errors.subjectSelect?.message}</p>
        </Label>

        <Label>
          Message
          <textarea
            placeholder="Subject"
            defaultValue=""
            {...(register("message"), { required: true })}
          />
          <p>{errors.message?.message}</p>
        </Label>
      </InputContainer>
      <input type="submit" />
    </Form>
  );
}

export default ContactUsForm;

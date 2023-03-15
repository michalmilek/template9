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

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        {/* register your input into the hook by invoking the "register" function */}
        <Label>
          Name:
          <input
            placeholder="Enter your name"
            defaultValue=""
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
    </form>
  );
}

export default ContactUsForm;

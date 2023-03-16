import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import ClearInput from "./simpleComponents/ClearInput";
import HookFormInput from "./simpleComponents/HookFormInput";
import TextArea from "./simpleComponents/TextArea";
import Select from "./simpleComponents/Select";
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

export type FormData = yup.InferType<typeof schema>;

const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.bgPrimary2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 50px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  width: 100%;
  row-gap: 40px;
  column-gap: 20px;
`;

function ContactUsForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const onSubmit = (data: FormData) => console.log(data);

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        {/* register your input into the hook by invoking the "register" function */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <HookFormInput
              label="Name"
              placeholder="Enter your name"
              error={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <HookFormInput
              label="Email"
              placeholder="Enter your email"
              error={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <HookFormInput
              label="Subject"
              placeholder="subject"
              error={errors.subject?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="subjectSelect"
          control={control}
          render={({ field }) => (
            <Select
              label="Subject"
              placeholder="subject"
              options={["male", "female", "other"]}
              error={errors.subjectSelect?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextArea
              label="Message"
              placeholder="message"
              error={errors.message?.message}
              {...field}
            />
          )}
        />
      </InputContainer>
      <input type="submit" />
    </Form>
  );
}

export default ContactUsForm;

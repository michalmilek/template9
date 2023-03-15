import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  subjectSelect: string;
  message: string;
};

function ContactUsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

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

      <input type="submit" />
    </form>
  );
}

export default ContactUsForm;

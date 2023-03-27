import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

function Form() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("I'm Valid");
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register("username", {
          required: "Username is Required",
          minLength: {
            value: 5,
            message: "The username should be longer than 5 chars.",
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: "Email is Required" })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: "Password is Required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}

export default Form;

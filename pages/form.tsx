import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log("I'm Valid");
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log("errors : ", errors);
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
        {...register("email", {
          required: "Email is Required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${errors.email ? "border-red-500" : ""}`}
      />
      {errors.email?.message}
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

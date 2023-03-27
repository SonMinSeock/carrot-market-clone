import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {
    console.log("I'm Valid");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}

export default Form;

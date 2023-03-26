import { useForm } from "react-hook-form";

function Form() {
  const { register } = useForm();

  return (
    <form>
      <input
        {...register("username")}
        type="text"
        required
        placeholder="Username"
      />
      <input {...register("email")} type="email" required placeholder="Email" />
      <input
        {...register("password")}
        type="password"
        required
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}

export default Form;

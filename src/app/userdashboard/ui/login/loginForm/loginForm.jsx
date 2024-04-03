"use client";

import styles from "./loginForm.module.css";
import { useFormState, useFormStatus } from "react-dom";
import { handleSubmitLoginForm } from "@/app/userdashboard/_lib/actions";

const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  console.log(pending, "pending");
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const LoginForm = () => {
  const [formState, formAction] = useFormState(handleSubmitLoginForm, {
    message: "",
    errors: undefined,
    fieldValues: {
      username: "",
      password: "",
    },
  });

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <SubmitButton />
      {/* {formState && formState} */}
    </form>
  );
};

export default LoginForm;

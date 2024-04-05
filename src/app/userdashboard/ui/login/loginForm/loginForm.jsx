"use client";

import styles from "./loginForm.module.css";
import { useFormState, useFormStatus } from "react-dom";
import { handleSubmitLoginForm } from "@/app/userdashboard/_lib/actions";

const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const LoginForm = () => {
  const [formState, formAction] = useFormState(handleSubmitLoginForm, {
    message: "",
    error: undefined,
    fieldValues: {
      username: "",
      password: "",
    },
  });

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="Username" name="username" required />
      <input type="password" placeholder="Password" name="password" required />
      <SubmitButton />
      <span className="text-red-600">
        {formState?.error && formState?.error}
      </span>
    </form>
  );
};

export default LoginForm;

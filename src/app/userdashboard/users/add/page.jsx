"use client";

import { addUser } from "../../_lib/actions";
import styles from "../../ui/userdashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;

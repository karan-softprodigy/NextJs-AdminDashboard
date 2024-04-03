import { getDashboardUserById, updateUser } from "../../_lib/actions";
import styles from "../../ui/userdashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await getDashboardUserById(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {user?.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input
            type="hidden"
            name="id"
            value={JSON.parse(JSON.stringify(user._id))} //JSON is used to remove the next js warning because _id is considered as to use in server side
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            defaultValue={user?.username}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            defaultValue={user?.password}
            placeholder="Password"
            required
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;

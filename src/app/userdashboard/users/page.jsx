import SearchBox from "../ui/userdashboard/search/search";
import styles from "./../ui/userdashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { getDashboardUserList, deleteUser } from "../_lib/actions";
import Pagination from "../ui/userdashboard/pagination/pagination";

const UsersPage = async ({ searchParams }) => {
  const searchQuery = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await getDashboardUserList(searchQuery, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchBox placeholder="Search for a user..." />
        <Link href="/userdashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={"/noavatar.png"}
                    alt="profile"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user?.username}
                </div>
              </td>
              <td>{user?.email}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/userdashboard/users/${user?._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input
                      type="hidden"
                      name="id"
                      value={JSON.parse(JSON.stringify(user?._id))} //JSON is used to remove the next js warning because _id is considered as to use in server side
                    />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;

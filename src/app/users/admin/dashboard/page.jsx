"use client";
import { useRouter } from "next/navigation";

const Admin = ({}) => {
  const Router = useRouter();
  return (
    <div>
      <p>Admin Dashboard</p>
      <p>This is Nested Route</p>
      <button onClick={() => Router.push("/users/admin/profile")}>
        Go to profile page.
      </button>
    </div>
  );
};

export default Admin;

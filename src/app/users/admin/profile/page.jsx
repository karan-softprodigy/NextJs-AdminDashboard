import Link from "next/link";
const Profile = () => {
  return (
    <div>
      <p>Admin Profile Page</p>
      <p>This is Nested Route</p>
      <Link href="/users/admin/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default Profile;

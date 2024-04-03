import Link from "next/link";

const RecentBlogs = () => {
  return (
    <div className="text-black">
      <h1 className="mb-5">Recent Blogs</h1>
      <p>
        Go to <Link href="/dashboard/popularBlogs">Popular Blogs</Link>
      </p>
    </div>
  );
};

export default RecentBlogs;

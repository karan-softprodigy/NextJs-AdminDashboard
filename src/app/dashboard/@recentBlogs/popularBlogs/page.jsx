import Link from "next/link";

const PopularBlogs = () => {
  return (
    <div>
      <p className="mb-5">Popular Blogs List here....</p>
      <p>
        Go to <Link href="/dashboard">Recent Blogs</Link>
      </p>
    </div>
  );
};

export default PopularBlogs;

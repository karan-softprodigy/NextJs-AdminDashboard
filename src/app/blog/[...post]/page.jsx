const BlogPost = async () => {
  const getBlogList = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const blogList = await getBlogList();

  return (
    <div>
      <h1 className="text-center font-bold text-xl">BlogPost</h1>
      {blogList?.map((blog) => (
        <div key={blog?.id} className="mb-3">
          <p>Title: {blog?.title}</p>
          <p>Desc: {blog?.body}</p>
          <hr />
        </div>
      ))}
      <p>This is called catch all route</p>
    </div>
  );
};

export default BlogPost;

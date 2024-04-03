const userNotFound = ({ params }) => {
  console.log(params, "params Not");

  return <div className="text-black">User with ID: {params?.id} not found</div>;
};

export default userNotFound;

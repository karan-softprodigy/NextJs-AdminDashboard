"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserList, deleteUser } from "../_actions/userActions";

const UserProfile = ({ params }) => {
  //Option One to fetch data using api endpoint
  // const getUserData = async () => {
  //   const userList = await fetch("http://localhost:3000/api/users", {
  //     method: "GET",
  //   });
  //   if (!userList.ok) return "Something went wrong";
  //   return userList.json();
  // };
  // const userList = await getUserData();

  //Option Two to fetch data without using api endpoint, directly from database in our component or page
  const [allUserList, setAllUserList] = useState([]);

  const handleGetUserList = async () => {
    const user = await getUserList();
    setAllUserList(user);
  };

  //when we want to show error on any particular condition, here not-found.jsx page will render created in this [id] folder., nit global not-found page
  const handleRestrictSpecificId = () => {
    if (params?.id === "500") {
      notFound();
    }
  };

  const handleDeleteUser = async (userId) => {
    const userDelete = await deleteUser(userId);
    if (userDelete) {
      alert("User deleted");
    } else {
      alert("Something went wrong");
    }
    console.log("userDelete", userDelete);
  };

  useEffect(() => {
    handleGetUserList();
    handleRestrictSpecificId();
  }, []);

  return (
    <div className="text-black">
      <p> UserProfile {params?.id}</p>
      <p className="mb-3">This is called Dynamic Route</p>
      {/* option One */}
      {/* {userList?.data?.map((user) => (
        <div key={user?._id}>
          <p>{user?.name}</p>
          <p>{user?.age}</p>
          <p>{user?.email}</p>
          <hr className="mb-3" />
        </div>
      ))} */}

      {/* option Two */}
      {allUserList?.map((user) => (
        <div key={user?._id} className="flex justify-between w-1/3">
          <div>
            <p>{user?.name}</p>
            <p>{user?.age}</p>
            <p>{user?.email}</p>
            <p>{user?._id}</p>
            <hr className="mb-3 w-full bg-gray-800 h-px" />
          </div>
          <button onClick={() => handleDeleteUser(user?._id)} className="ml-6">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;

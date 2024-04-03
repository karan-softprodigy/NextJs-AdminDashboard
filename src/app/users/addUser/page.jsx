// "use client";
import dbConnection from "@/lib/dbConnection";
// import { useState } from "react";
import UserModel from "@/models/Users";
import { revalidatePath } from "next/cache";
import { addUser } from "../_actions/userActions";

/* Option 1 */

const AddUser = () => {
  // const [userData, setUserData] = useState({
  //   name: "",
  //   age: "",
  //   email: "",
  // });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    if (res.status === 200 && res.ok) {
      setUserData({ name: "", age: "", email: "" });
      alert("User Added Successfully");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="text-black">
      <h1>Add User Form</h1>
      {/* <form onSubmit={handleSubmit}>
        <input
          value={userData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          name="name"
        />{" "}
        <br />
        <input
          value={userData.age}
          onChange={handleChange}
          placeholder="Enter Age"
          name="age"
        />{" "}
        <br />
        <input
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          name="email"
        />
        <br />
        <button type="submit">Add User</button>
      </form> */}

      {/* Option 2 */}

      <form action={addUser}>
        <input type="text" placeholder="Enter Name" name="name" /> <br />
        <input type="number" placeholder="Enter Age" name="age" /> <br />
        <input type="text" placeholder="Enter Email" name="email" />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;

import mongoose from "mongoose";

//defining schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, trim: true },
  email: { type: String, required: true, trim: true },
});

//compiling schema
const Users = mongoose.models.Users || mongoose.model("Users", userSchema);
export default Users;

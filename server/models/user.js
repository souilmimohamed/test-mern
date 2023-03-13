import mongoose from "mongoose";

const userShema = mongoose.Schema({
  email: String,
  password: String,
  fullname: String,
  isAdmin: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userShema);

export default User;

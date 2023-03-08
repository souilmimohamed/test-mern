import mongoose from "mongoose";

const userShema = mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  email: String,
  profiles: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userShema);

export default User;

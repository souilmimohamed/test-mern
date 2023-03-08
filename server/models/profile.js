import mongoose from "mongoose";

const profileShema = mongoose.Schema({
  profilename: String,
  color: String,
  isGlobalAdmin: Boolean,
  customerService: Boolean,
  masterData: Boolean,
  materialMangement: Boolean,
  administration: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Profile = mongoose.model("Profile", profileShema);

export default Profile;

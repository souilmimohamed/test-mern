import Profile from "../models/profile.js";

async function ParseUsers(users) {
  let usersList = [];
  if (users && users.length) {
    for (let index = 0; index < users.length; index++) {
      let profilesIds = users[index].profiles;
      let usersProfiles = [];
      let profiles = await Profile.find({ _id: { $in: [...profilesIds] } });
      if (profiles && profiles.length)
        profiles.forEach((profile) => {
          usersProfiles.push({
            profilename: profile.profilename,
            color: profile.color,
          });
        });
      usersList.push({
        username: users[index].username,
        fullname: users[index].fullname,
        email: users[index].email,
        profiles: usersProfiles,
      });
    }
  }
  return usersList;
}

export default ParseUsers;

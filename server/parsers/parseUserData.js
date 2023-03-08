function parseUserData(user, profiles) {
  let finalProfile = {
    isGlobalAdmin: false,
    customerService: false,
    masterData: false,
    materialMangement: false,
    administration: false,
  };
  if (profiles && profiles.length)
    profiles.forEach((element) => {
      finalProfile.isGlobalAdmin =
        finalProfile.isGlobalAdmin || element.isGlobalAdmin;

      finalProfile.customerService =
        finalProfile.customerService || element.customerService;

      finalProfile.masterData = finalProfile.masterData || element.masterData;

      finalProfile.materialMangement =
        finalProfile.materialMangement || element.materialMangement;

      finalProfile.administration =
        finalProfile.administration || element.administration;
    });
  return {
    username: user.username,
    fullname: user.fullname,
    access: finalProfile,
  };
}

export default parseUserData;

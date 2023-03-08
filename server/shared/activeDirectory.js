import ActiveDirectory from "activedirectory";

const config = {
  url: process.env.AD_URL,
  baseDN: "dc=domain,dc=com",
};
var ad = new ActiveDirectory(config);

function authenticateAD(username, password) {
  ad.authenticate(username, password, (err, auth) => {
    if (err) {
      console.log(err);
    }
    if (auth) {
      console.log("Authenticated.");
    } else {
      console.log("Authentication failed!");
    }
  });
}

export default authenticateAD;

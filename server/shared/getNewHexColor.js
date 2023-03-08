import Profile from "../models/profile.js";

export const GenerateNewColor = async () => {
  let colors = await Profile.distinct("color");
  let newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (!colors.includes(newColor)) return newColor;
  else GenerateNewColor();
};

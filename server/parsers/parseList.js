function ParseList(message) {
  if (typeof message === "string") return [message];
  else return message;
}
export default ParseList;

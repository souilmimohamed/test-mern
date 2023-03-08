import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error MongoDB Connection: ${error}`.red.underline.bold);
    process.exit(1);
  }
};
export default connectDB;

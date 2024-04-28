import mongoose from "mongoose";

export async function ConnectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongodb connected");
    });
    connection.on("error", (err) => {
      console.log(
        "mongodb connection error ,Please make sure db is up and running " +
          err
      );
      process.exit()
    });
  } catch (error) {
    console.log(error, "Something went wrong  while connecting to db");
  }
}

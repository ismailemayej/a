import app from "./app";
import mongoose from "mongoose";
const port = 5000;
import dotenv from "dotenv";

dotenv.config();

const url =
  "mongodb+srv://dbadmin:Fo1PgvOhSik9pRGA@firstuser.pppqtxx.mongodb.net/?retryWrites=true&w=majority";
async function serverConnect() {
  try {
    await mongoose.connect(url);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

serverConnect();

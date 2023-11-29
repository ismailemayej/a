import { Request, Response } from "express";
import { singleUserRoute } from "../app";
import { userdata } from "../data/data";

const findId = async (userID: string) => {
  try {
    const user = await userdata.findById(userID, { password: 0 });
    if (!user) {
      console.log("user not found");
    } else {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};
singleUserRoute.get(
  "/api/user/:userID",
  async (req: Request, res: Response) => {
    try {
      const userid = req.params.userId;
      const user = await userdata.findById(userid);
      if (!user) {
        console.log("user not found");
      } else {
        const data = findId(userid);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

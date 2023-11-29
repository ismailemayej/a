import express, { Request, Response } from "express";
import { userdata } from "./data/data";
export const getRoute = express.Router();

getRoute.get("/", async (req: Request, res: Response) => {
  try {
    const result = await userdata.find(
      { age: { $gte: 25 } },
      { username: 1, fullName: 1, age: 1, email: 1, address: 1 }
    );
    res.status(200).json({
      ststus: "succesfully",
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (erorr) {
    console.log(erorr);
  }
});

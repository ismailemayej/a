import { Request, Response } from "express";
import { userdata } from "./data/data";
// create user data------------------------------------------
const createUser = async (req: Request, res: Response) => {
  try {
    const users = req.body;

    const result = await studentfile(users);

    res.status(200).json({
      success: true,
      messege: "user created successfully",
      data: users,
    });
  } catch (erorr) {
    console.log(erorr);
  }
};
const studentfile = async (user: string) => {
  await userdata.create(user);
};

export const createuserdata = {
  createUser,
};

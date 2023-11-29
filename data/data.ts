import { Schema, model } from "mongoose";

type user = {
  userId: "number";
  username: "string";
  password: "string";
  fullName: {
    firstName: "string";
    lastName: "string";
  };
  age: "number";
  email: "string";
  isActive: "boolean";
  hobbies: ["string", "string"];
  address: {
    street: "string";
    city: "string";
    country: "string";
  };
};

const userSchema = new Schema<user>({
  userId: "number",
  username: "string",
  password: "string",
  fullName: {
    firstName: "string",
    lastName: "string",
  },
  age: "number",
  email: "string",
  isActive: "boolean",
  hobbies: ["string", "string"],
  address: {
    street: "string",
    city: "string",
    country: "string",
  },
});

export const userdata = model<user>("users", userSchema);

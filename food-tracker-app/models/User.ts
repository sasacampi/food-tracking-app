import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  email: string;
  password: string;
  name: string;
  weight: number;
  age: number;
  gender: string;
}

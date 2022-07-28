import { Request, Response } from "express";
import { get, post, controller, bodyValidator } from "./decorators/index";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send("Login page");
  }

  @post("/signup")
  @bodyValidator("email", "password")
  async postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(400);
      res.send({ error: "User already exists." });
    } else {
      bcrypt.hash(password, 12, async (err, hash) => {
        if (err) throw err;
        const newUser = new UserModel({
          email,
          password: hash,
        });
        await newUser.save();
        res.status(201);
        res.send(newUser);
      });
    }
  }
}

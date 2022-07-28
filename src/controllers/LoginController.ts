import { Request, Response } from "express";
import { get, post, controller, bodyValidator } from "./decorators/index";
import User from "../models/UserModel";
import bcrypt from "bcrypt";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send("Login page");
  }

  @post("/signup")
  @bodyValidator("email", "password")
  async signup(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(400);
      res.send({ error: "User already exists." });
    } else {
      bcrypt.hash(password, 12, async (err, hash) => {
        if (err) throw err;
        const newUser = new User({
          email,
          password: hash,
        });
        await newUser.save();
        res.status(201);
        res.send(newUser);
      });
    }
  }

  @post("/signin")
  @bodyValidator("email", "password")
  async signin(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.send(user);
      } else {
        res.status(401);
        res.send({ error: "Login failed." });
      }
    } else {
      res.status(401);
      res.send({ error: "Invalid email or password." });
    }
  }
}

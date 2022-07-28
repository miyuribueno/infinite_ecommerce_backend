import { Request, Response } from "express";
import { get, post, controller, bodyValidator } from "./decorators/index";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send("Login page");
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email === "milo@example.com" && password === "1234") {
      res.send("You tried to login");
    } else {
      res.send("Invalid email or password");
    }
  }
}

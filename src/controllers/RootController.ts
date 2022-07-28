import { Request, Response } from "express";
import { get, controller, use } from "./decorators/index";

@controller("")
// Root route
class RootController {
  @get("/")
  getRoot(req: Request, res: Response): void {
    res.send("Infinite Ecommerce App");
  }
}

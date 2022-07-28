// Required external modules

import { Router, Request, Response } from "express";

// App variables

const router = Router();

// Interface

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

// GET

router.get("/", (req: Request, res: Response) => {
  res.send("Infinite Ecommerce App");
});

export { router };

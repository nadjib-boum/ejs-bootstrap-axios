import type { Request, Response, NextFunction, Router } from "express";

export default (router: Router) => {
  router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render("index");
  });
  router.get("/about", (req: Request, res: Response, next: NextFunction) => {
    res.render("pages/about");
  });
};

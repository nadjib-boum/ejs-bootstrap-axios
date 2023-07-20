import express, { type Router } from "express";
import mainRoute from "./main";
const router: Router = express.Router();

export default (): Router => {
  mainRoute(router);
  return router;
};

import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/", controller.create)
  .get("/", controller.all)
  .get("/:id", controller.byId); // Fix bug for get by id;
// Add a request to edit application
// Add a request to delete application

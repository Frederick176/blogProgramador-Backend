import { Router } from "express";
import { createComment } from "./comment.controller.js";
import { addCommentValidator } from "../middlewares/comment-validator.js";

const router = Router();

router.post("/add", addCommentValidator, createComment);

export default router;
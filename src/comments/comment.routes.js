import { Router } from "express";
import { createComment,getCommentsByPublication } from "./comment.controller.js";
import { addCommentValidator, getCommentsByPublicationValidator } from "../middlewares/comment-validator.js";

const router = Router();

router.post("/add", addCommentValidator, createComment);

router.get("/:postId", getCommentsByPublicationValidator, getCommentsByPublication);

export default router;
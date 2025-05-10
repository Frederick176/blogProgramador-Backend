import { body } from "express-validator"
import { validateField } from "./field-validator.js"
import { handleErrors } from "./handle-errors.js"

export const addCommentValidator = [
    body("postId", "PostId is required").notEmpty(),
    body("postId", "PostId must be a valid ObjectId").isMongoId(),
    body("name", "Name is required").notEmpty(),
    body("content", "Content is required").notEmpty(),
    validateField,
    handleErrors
]
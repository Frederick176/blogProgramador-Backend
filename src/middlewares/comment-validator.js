import { body } from "express-validator"
import { validateField } from "./field-validator.js"
import { handleErrors } from "./handle-errors.js"

export const addCommentValidator = [
    body("post", "Post is required").notEmpty(),
    body("post", "Post must be a valid").notEmpty(),
    body("name", "Name is required").notEmpty(),
    body("comment", "comment is required").notEmpty(),
    validateField,
    handleErrors
]
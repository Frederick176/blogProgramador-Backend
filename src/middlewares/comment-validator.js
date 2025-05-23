import { body, param } from "express-validator"
import { validateField } from "./field-validator.js"
import { handleErrors } from "./handle-errors.js"

export const addCommentValidator = [
    body("publicationId", "publicationId is required").notEmpty(),
    body("publicationId", "publicationId must be a valid objectId").isMongoId(),
    body("name", "Name is required").notEmpty(),
    body("comment", "comment is required").notEmpty(),
    validateField,
    handleErrors
]

export const getCommentsByPublicationValidator = [
    validateField,
    handleErrors
]
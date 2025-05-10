import { body, param } from "express-validator";
import { validatePublication, validatePublicationId } from "../helpers/db-validator.js";
import { validateField } from "./field-validator.js";
import { handleErrors } from "./handle-errors.js";

export const createPublicationValidator = [
    body("title", "Title is required").notEmpty(),
    body("title").custom(validatePublication),
    body("description", "Description is required").notEmpty(),
    body("course", "Course is required").notEmpty(),
    body("course", "Course must be a valid ObjectId").isMongoId(),
    validateField,
    handleErrors
]

export const updatePublicationValidator = [
    param("id", "Id is required").notEmpty(),
    param("id", "Id must be a valid ObjectId").isMongoId(),
    param("id").custom(validatePublicationId),
    validateField,
    handleErrors
]

export const deletePublicationValidator = [
    param("id", "Id is required").notEmpty(),
    param("id", "Id must be a valid ObjectId").isMongoId(),
    param("id").custom(validatePublicationId),
    validateField,
    handleErrors
]

export const getPublicationsByCourseValidator = [
    body("name", "Name course is required").notEmpty(),
    validateField,
    handleErrors
]
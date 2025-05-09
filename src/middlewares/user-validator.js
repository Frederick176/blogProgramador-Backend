import { body } from "express-validator";
import { validateField } from "./field-validator.js";
import { deleteFileOnError } from "./delite-file-on-error,js"
import { handleErrors } from "./handle-errors.js";
import { emailExist, userNameExist } from "../helpers/db-validator.js";
import { validateJWT } from "./validate-jwt.js";

export const registerValidator = [
    body("name", "El nombre es obligatorio").notEmpty(),
    body("surname", "El apellido es obligatorio").notEmpty(),
    body("username", "El nombre de usuario es obligatorio").notEmpty(),
    body("email", "El correo es obligatorio").notEmpty(),
    body("email", "No es un correo valido").isEmail(),
    body("email").custom(emailExist),
    body("username").custom(userNameExist),
    body("password").isStrongPassword({
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    validateField,
    deleteFileOnError,
    handleErrors
]

export const loginValidator = [
    body("email", "No es un email válido").optional().isEmail(),
    body("username", "Username es erroneo").optional().isString(),
    validateField,
    handleErrors
]

export const updateUserValidator = [
    validateJWT,
    validateField,
    handleErrors
]

export const updateProfilePictureValidator = [
    validateJWT,
    validateField,
    deleteFileOnError,
    handleErrors
]

export const updatePasswordValidator = [
    validateJWT,
    body("newPassword").isStrongPassword({
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    validateField,
    handleErrors
]
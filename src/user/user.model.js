import { Schema, model } from "mongoose";

const userSchema = new Schema ({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        maxLength: [30, "El nombre no puede tener más de 30 caracteres"],
    },
    surname: {
        type: String,
        required: [true, "El apellido es requerido"],
        maxLength: [30, "El apellido no puede tener más de 30 caracteres"],
    },
    username: {
        type: String,
        required: [true, "El nombre de usuario es requerido"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "El correo es requerido"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"]
    }, 
    profielPicture: {
        type: String,
    },
    role:{
        type: String,
        enum: ["ADMIN_ROLE", "USER_ROLE"],
        default: "USER_ROLE"
    }

},
{

    versionKey: false,
    timestamps: true

})

export default model("User", userSchema)
import { Schema, model } from "mongoose";

const publicationSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true,
    versionKey: false

})

export default model("Publication", publicationSchema)
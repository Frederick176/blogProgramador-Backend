import { Schema, model } from "mongoose";

const commentSchema = new Schema ({
    post: {
        type: String,
        ref: "Publication",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default model("Comment", commentSchema)
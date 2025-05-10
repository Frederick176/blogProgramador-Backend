import { Schema, model } from "mongoose";

const commentSchema = new Schema ({
    posrId: {
        type: Schema.Types.ObjectId,
        ref: "Publication",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default model("Comment", commentSchema)
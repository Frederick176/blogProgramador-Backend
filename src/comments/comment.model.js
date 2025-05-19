import { Schema, model } from "mongoose";

const commentSchema = new Schema ({
    publicationId: {
        type: Schema.Types.ObjectId,
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
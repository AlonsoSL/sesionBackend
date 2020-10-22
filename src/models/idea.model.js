const mongoose = require('mongoose');
const { Schema } = mongoose;

const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    description: { type: String },
    upvotes: [{ type: Boolean }],
    downvote: [{ ype: Boolean }],
    author: {
        tye: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        autopopulate: true
    },
    comments: []
});

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose("idea", IdeaSchema);
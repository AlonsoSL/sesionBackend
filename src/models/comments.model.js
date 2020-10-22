const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommetSchema = new Schema({
    comment: { type: String, required: true },
    description: { type: String },
    author: {
        tye: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        autopopulate: true
    }
});

CommetSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose("comment", CommetSchema);
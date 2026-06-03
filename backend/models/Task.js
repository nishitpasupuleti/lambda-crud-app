import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    tags : {
        type: [String],
        default: []
    }
},{timestamps: true})

export default mongoose.model('Task', taskSchema);
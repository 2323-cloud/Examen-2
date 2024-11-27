import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const plato = mongoose.model('plato', dishSchema)

export default plato
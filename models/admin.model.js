import mongoose from "mongoose";
import normalize from 'normalize-mongoose'


const adminSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, }
}, { timestamps: true })

adminSchema.plugin(normalize);

export const adminModel = mongoose.model('Admin', adminSchema);

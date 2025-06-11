import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import connectDb from '../config/db.js';
import { adminModel } from '../models/admin.model.js';

dotenv.config();

const seedAdmins = async () => {
    await connectDb();

    const existingAdmins = await adminModel.find();
    if (existingAdmins > 0){
        console.log('Admin users already exist. No seeding performed!')
        return process.exit(0);
    }
    const admins = [
        {
            username:'Master',
            password: bcrypt.hashSync('5tudY@Xlms', 12)
        },
        {
            username:'User',
            password: bcrypt.hashSync('S7UDy#Xlms', 12)
        }
    ];

    try{
    await adminModel.insertMany(admins);
    console.log('Admin users seeded successfully');
    process.exit(0)
    }
    catch(error){
        console.error('Error seeding Admins:',error);
        process.exit(1);
    }
};

seedAdmins();
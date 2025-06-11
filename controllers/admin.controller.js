import { adminModel } from "../models/admin.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export const loginAdmin = async (req, res, next)=>{
    const{username, password}= req.body;
    const admin = await adminModel.findOne({username});

    //check if admin
    if(!admin){
        res.status(400).json({success:false, message:'Invalid credentials'});
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
        res.status(400).json({success:false, message:'Invalid credentials'})
    }

    const accessToken = jwt.sign(
        {
        id: admin.id
    },
    process.env.JWT_SECRET,
    {expiresIn:'24h'})

    res.json({accessToken})
}